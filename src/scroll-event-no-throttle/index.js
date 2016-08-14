import { setup } from '~/scene';
import { getScrollPosition } from '~/common';

export default () => {
    const nodes = setup();

    document.addEventListener('scroll', () => {
        const y = getScrollPosition();
        nodes.forEach(node =>
            node.style.transform = `translateX(-${y}px)`
        );
    });
}
