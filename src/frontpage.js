import scrollNoThrottle from '~/scroll-event-no-throttle';
import scrollWithThrottle from '~/scroll-event-with-throttle';
import requestAnimationFrame from '~/request-animation-frame';
import reactScrollEvent from '~/react-scroll-event-no-throttle';
import reactScrollEventThrottle from '~/react-scroll-event-with-throttle'
import reactAnimationFrame from '~/react-request-animation-frame';

export const setup = () => {
    const rootNode = document.getElementById('root');
    while (rootNode.firstChild) {
        rootNode.removeChild(rootNode.firstChild);
    }

    const links = document.createElement('ul');

    function addLink(label, handler) {
        const el = document.createElement('li');
        const link = document.createElement('a');

        const href = label.toLowerCase().replace(/\s/g, '-');
        link.href = href;
        link.textContent = label;
        link.addEventListener('click', event => {
            event.preventDefault();
            handler.call(null);
            history.pushState({}, label, href);
            return false;
        });

        el.appendChild(link);
        links.appendChild(el);
    }

    addLink('Scroll event with no throttle', scrollNoThrottle);
    addLink('Scroll event with throttle', scrollWithThrottle);
    addLink('Request animation frame', requestAnimationFrame);
    addLink('React scroll event no throttle', reactScrollEvent);
    addLink('React scroll event with throttle', reactScrollEventThrottle);
    addLink('React animation frame', reactAnimationFrame);

    rootNode.appendChild(links);

}
