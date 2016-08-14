import { setup } from '~/scene';
import { getScrollPosition } from '~/common';

export default () => {
    const nodes = setup();

    function handleScrollPosition() {
        const y = getScrollPosition();
        nodes.forEach(node =>
            node.style.transform = `translateX(-${y}px)`
        );

        requestAnimationFrame(handleScrollPosition);
    }

    handleScrollPosition();
}
