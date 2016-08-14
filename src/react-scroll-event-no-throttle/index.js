import React from 'react';
import { render } from 'react-dom';

import { setup } from '~/scene';
import {
    getScrollPosition,
    Scroller,
} from '~/common';

class UnthrottledScroller extends Scroller {

    constructor(props) {
        super(props);
        this.onScroll = this.onScroll.bind(this);
        this.state = { y: 0 };
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
}

export default () => {
    render(
        <UnthrottledScroller />,
        document.getElementById('root')
    );
}
