export const getScrollPosition = () => {
    return window.scrollY;
}

export const throttle = (handler, threshhold) => {
    let last;
    let timeout;
    return (...args) => {
        const now = new Date().getTime();
        if (last && now < last + threshhold) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                last = now;
                handler.apply(null, args);
            }, threshhold);
        } else {
            last = now;
            handler.apply(null, args);
        }
    }
}
