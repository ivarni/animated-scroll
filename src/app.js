import '~/styles.less';
import scroller from '~/scroller';

const rootNode = document.getElementById('root');

const mainNode = document.createElement('div');
mainNode.classList.add('main');

const scrollNodes = [1,2,3].map(index => {
    const scrollNode = document.createElement('div');
    scrollNode.classList.add('appear-on-scroll');
    scrollNode.classList.add(`appear-on-scroll--${index}`);

    return scrollNode;
});

scrollNodes.forEach(node => mainNode.appendChild(node));

rootNode.appendChild(mainNode);

scroller(scrollNodes);
