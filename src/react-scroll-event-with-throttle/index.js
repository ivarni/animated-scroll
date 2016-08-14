import React from 'react';
import {
    findDOMNode,
    render,
} from 'react-dom';

import { setup } from '~/scene';
import {
    getScrollPosition,
    Scroller,
    throttle,
} from '~/common';

class ThrottledScroller extends Scroller {

    constructor(props) {
        super(props);
        this.onScroll = throttle(this.onScroll.bind(this), 200);
        this.onSetThrottle = this.onSetThrottle.bind(this);
        this.state = { timeout: 200 };
    }

    componentWillMount() {
        document.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll);
    }

    onScroll() {
        const y = getScrollPosition();
        this.setState({ y });
    }

    onSetThrottle() {
        const timeout = findDOMNode(this.refs.input).value;
        this.setState({ timeout });

        document.removeEventListener('scroll', this.onScroll);
        this.onScroll = throttle(() => {
            const y = getScrollPosition();
            this.setState({ y });
        }, Number(timeout));
        document.addEventListener('scroll', this.onScroll);
    }

    render() {
        const scene = super.render();
        const { timeout } = this.state;
        return (
            <div>
                <input
                    className="fixed-input"
                    defaultValue={timeout}
                    ref="input"
                    type="tel"
                />
                <button
                    className="fixed-button"
                    onClick={this.onSetThrottle}
                >
                    Set throttle
                </button>
                {scene}
            </div>
        )
    }
}

export default () => {
    render(
        <ThrottledScroller />,
        document.getElementById('root')
    );
}
