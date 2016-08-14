import 'babel-polyfill';

import React, { Component } from 'react';
import { render } from 'react-dom';

import { setup } from '~/scene';
import { setup as frontpage } from '~/frontpage';
import { getScrollPosition } from '~/common';

class Scroller extends Component {

    constructor(props) {
        super(props);
        this.onScroll = this.onScroll.bind(this);
        this.state = { y: 0 };
    }

    componentWillMount() {
        document.addEventListener('scroll', this.onScroll);
    }

    componentWillDismount() {
        document.removeEventListener('scroll', this.onScroll);
    }

    onScroll() {
        const y = getScrollPosition();
        this.setState({ y });
    }

    onBackLinkClick(event) {
        event.preventDefault();
        history.pushState({}, 'Scroll animations', '/');
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

export default () => {

    render(
        <Scroller />,
        document.getElementById('root')
    );
}
