import { setup } from '~/scene';

export default () => {
    const nodes = setup();

    document.addEventListener('scroll', () => {
        const y = window.scrollY;
        nodes.forEach(node =>
            node.style.transform = `translateX(-${y}px)`
        );
    });
}
