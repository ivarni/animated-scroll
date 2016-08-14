import React, { Component } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { setup as frontpage } from '~/frontpage';

export const getScrollPosition = () => {
    return window.pageYOffset || window.scrollY;
}

export const throttle = (handler, threshhold) => {
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

export class Scroller extends Component {

    onBackLinkClick(event) {
        event.preventDefault();
        history.pushState({}, 'Scroll animations', '/');
        unmountComponentAtNode(document.getElementById('root'));
        frontpage();
        return false;
    }

    render() {
        const { y } = this.state;

        return (
            <div className="main">
                <a
                    className="back-link"
                    href="/"
                    onClick={this.onBackLinkClick}
                >
                    Back
                </a>
                {[1,2,3].map(index => (
                    <div
                        key={`node-${index}`}
                        className={`appear-on-scroll appear-on-scroll--${index}`}
                        style={{
                            transform: `translateX(-${y}px`,
                        }}
                    />
                ))}
            </div>
        );
    }
}
