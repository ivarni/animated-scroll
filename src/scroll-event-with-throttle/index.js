import { setup } from '~/scene';
import {
    getScrollPosition,
    throttle,
} from '~/common';

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
        const y = getScrollPosition();
        nodes.forEach(node => {
            node.style.transform = `translateX(-${y}px`
        });
    }, timeout));
}
