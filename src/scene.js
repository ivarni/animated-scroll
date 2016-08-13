import { setup as frontpage } from '~/frontpage';

export const setup = () => {
    const rootNode = document.getElementById('root');
    while (rootNode.firstChild) {
        rootNode.removeChild(rootNode.firstChild);
    }

    const mainNode = document.createElement('div');
    mainNode.classList.add('main');

    const backLink = document.createElement('a');
    backLink.href = '/';
    backLink.textContent = 'Back';
    backLink.classList.add('back-link');
    backLink.addEventListener('click', event => {
        event.preventDefault();
        history.pushState({}, 'Scroll animations', '/');
        frontpage();
        return false;
    });
    mainNode.appendChild(backLink);

    const scrollNodes = [1,2,3].map(index => {
        const scrollNode = document.createElement('div');
        scrollNode.classList.add('appear-on-scroll');
        scrollNode.classList.add(`appear-on-scroll--${index}`);

        return scrollNode;
    });
    scrollNodes.forEach(node => mainNode.appendChild(node));

    rootNode.appendChild(mainNode);
    return scrollNodes;
}
