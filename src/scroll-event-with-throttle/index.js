import { setup } from '~/scene';

function throttle(handler, threshhold) {
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

export default () => {
    start();
}

function start(timeout = 200) {
    const nodes = setup();

    const rootNode = document.getElementById('root');

    const input = document.createElement('input');
    input.type = 'tel';
    input.classList.add('fixed-input');
    input.value = timeout;
    rootNode.appendChild(input);

    const button = document.createElement('button');
    button.classList.add('fixed-button');
    button.textContent = 'Set throttle';
    button.addEventListener('click', () => {
        const value = input.value;
        start(value);
        window.scrollTo(0, 0);
    });
    rootNode.appendChild(button);

    document.addEventListener('scroll', throttle(() => {
        const y = window.scrollY;
        nodes.forEach(node => {
            node.style.transform = `translateX(-${y}px`
        });
    }, timeout));
}
