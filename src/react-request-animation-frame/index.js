import React from 'react';
import { render } from 'react-dom';

import { setup } from '~/scene';
import {
    getScrollPosition,
    Scroller,
} from '~/common';

class RAFScroller extends Scroller {

    constructor(props) {
        super(props);
        this.onAnimationFrame = this.onAnimationFrame.bind(this);
        this.state = { y: 0 };
    }

    onAnimationFrame() {
        const y = getScrollPosition();
        this.setState({ y });
        this.rafId = requestAnimationFrame(this.onAnimationFrame);
    }

    componentWillMount() {
        this.onAnimationFrame();
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.rafId);
    }
}

export default () => {
    render(
        <RAFScroller />,
        document.getElementById('root')
    );
}
