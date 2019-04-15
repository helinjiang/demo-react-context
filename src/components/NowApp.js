import React, { Component } from 'react';

import NowProvider from './NowProvider';
import Now2Provider from './Now2Provider';
import NowBanner from './NowBanner';
import NowRoom from './NowRoom';

export default class NowApp extends Component {
    state = {
        type: 1
    };

    handleChange = () => {
        // 切换的时候，会导致 Provide 里面的组件重新渲染
        this.setState({
            type: this.state.type === 1 ? 2 : 1
        });
    };

    render() {
        const { type } = this.state;

        const Provider = (type === 1) ? NowProvider : Now2Provider;

        return (
            <Provider>
                <div>
                    <h1>I am the now app</h1>
                    <NowBanner />
                    <NowRoom handleChange={this.handleChange} />
                </div>
            </Provider>
        );
    }
}