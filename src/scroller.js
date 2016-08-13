export default nodes => {

    document.addEventListener('scroll', () => {
        const y = window.scrollY;
        nodes.forEach(node =>
            node.style.transform = `translateX(-${y}px)`
        );
    });

}
