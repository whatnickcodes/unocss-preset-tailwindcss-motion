const repeatTimers = new WeakMap()
const waitObservers = new WeakMap()
let mutationObserver = null

const nextFrame = (callback) => {
    if (globalThis.requestAnimationFrame) {
        return globalThis.requestAnimationFrame(callback)
    }
    return globalThis.setTimeout(callback, 0)
}

export const readMotionTime = (value) => {
    const raw = String(value || '').trim()
    const match = raw.match(/^(-?(?:\d+|\d*\.\d+))(ms|s)$/)
    if (!match) return 0
    const amount = Number(match[1])
    return match[2] === 's' ? amount * 1000 : amount
}

export const motionSequenceDuration = (scope) => {
    if (!scope?.getAnimations) return 0

    let max = 0
    for (const animation of scope.getAnimations({ subtree: true })) {
        const name = animation.animationName || ''
        if (!name.startsWith('motion-step-')) continue

        const timing = animation.effect?.getComputedTiming?.()
        if (!timing || !Number.isFinite(timing.duration)) continue

        const iterations = timing.iterations === Infinity
            ? 1
            : Math.max(1, timing.iterations || 1)
        const end = Math.max(0, timing.delay || 0)
            + (timing.duration * iterations)
            + Math.max(0, timing.endDelay || 0)

        if (Number.isFinite(end)) max = Math.max(max, end)
    }

    return max
}

const clearRepeatTimer = (scope) => {
    const timer = repeatTimers.get(scope)
    if (timer) clearTimeout(timer)
    repeatTimers.delete(scope)
}

const clearWaitObserver = (scope) => {
    const observer = waitObservers.get(scope)
    if (observer) observer.disconnect()
    waitObservers.delete(scope)
}

export const clearMotionRepeat = (scope) => {
    clearRepeatTimer(scope)
    clearWaitObserver(scope)
}

export const parseMotionRepeatCount = (value) => {
    const raw = String(value || 'infinite').trim()
    if (raw === 'infinite') return Infinity
    const count = Number(raw)
    return Number.isFinite(count) ? Math.max(0, count) : Infinity
}

export const getMotionRepeatWaitNode = (scope) => {
    return scope?.closest?.('.wait') || null
}

const waitForUnwait = (scope, options) => {
    const waitNode = getMotionRepeatWaitNode(scope)
    if (!waitNode) {
        clearWaitObserver(scope)
        return false
    }

    if (waitObservers.has(scope)) return true
    if (!globalThis.MutationObserver) return true

    const observer = new MutationObserver(() => {
        if (!scope.isConnected) {
            clearMotionRepeat(scope)
            return
        }
        if (!getMotionRepeatWaitNode(scope)) {
            clearWaitObserver(scope)
            nextFrame(() => scheduleMotionRepeat(scope, options))
        }
    })

    observer.observe(waitNode, { attributes: true, attributeFilter: ['class'] })
    waitObservers.set(scope, observer)
    return true
}

export const scheduleMotionRepeat = (scope, options = {}) => {
    if (!scope?.isConnected) return null
    clearRepeatTimer(scope)

    const style = getComputedStyle(scope)
    if (style.getPropertyValue('--motion-repeat').trim() !== '1') {
        clearWaitObserver(scope)
        return null
    }

    if (options.respectReducedMotion !== false
        && globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
        clearWaitObserver(scope)
        return null
    }

    if (waitForUnwait(scope, options)) return null

    const maxPlays = parseMotionRepeatCount(style.getPropertyValue('--motion-repeat-count'))
    const completedRepeats = Math.max(0, Number(scope.dataset.motionRepeatDone || 0) || 0)
    if (Number.isFinite(maxPlays) && completedRepeats >= Math.max(0, maxPlays - 1)) {
        return null
    }

    const hold = readMotionTime(style.getPropertyValue('--motion-repeat-delay'))
    const duration = motionSequenceDuration(scope)
    if (!duration) return null

    const timer = setTimeout(() => {
        repeatTimers.delete(scope)
        if (!scope.isConnected) return

        const clone = options.cloneScope
            ? options.cloneScope(scope)
            : scope.cloneNode(true)

        clone.dataset.motionRepeatDone = String(completedRepeats + 1)
        scope.replaceWith(clone)
        options.onRepeat?.(clone, scope)
        nextFrame(() => scheduleMotionRepeat(clone, options))
    }, duration + Math.max(0, hold))

    repeatTimers.set(scope, timer)
    return timer
}

export const initMotionRepeats = (root = globalThis.document, options = {}) => {
    if (!root) return []

    const scopes = []
    if (root.matches?.('.motion-repeat')) scopes.push(root)
    root.querySelectorAll?.('.motion-repeat').forEach((scope) => scopes.push(scope))

    nextFrame(() => {
        scopes.forEach((scope) => scheduleMotionRepeat(scope, options))
    })

    return scopes
}

export const observeMotionRepeats = (root = globalThis.document?.body, options = {}) => {
    if (!root || mutationObserver || !globalThis.MutationObserver) return mutationObserver

    mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType !== 1) return
                initMotionRepeats(node, options)
            })
        })
    })
    mutationObserver.observe(root, { childList: true, subtree: true })
    return mutationObserver
}

export const startMotionRepeats = (root = globalThis.document, options = {}) => {
    const scopes = initMotionRepeats(root, options)
    observeMotionRepeats(root?.body || root, options)
    return scopes
}
