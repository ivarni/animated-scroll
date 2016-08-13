import { setup } from '~/scene';

export default () => {
    const nodes = setup();

    function handleScrollPosition() {
        const y = window.scrollY;
        nodes.forEach(node =>
            node.style.transform = `translateX(-${y}px)`
        );

        requestAnimationFrame(handleScrollPosition);
    }

    handleScrollPosition();
}
