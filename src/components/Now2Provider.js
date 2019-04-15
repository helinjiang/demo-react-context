import React, { Component } from 'react';

import NowContext from './NowContext';

export default class NowProvider extends Component {
    state = {
        guid: '123456abcdefg',
        name: 'now app2',
        bannerName: 'I am banner!2',
        count: 0
    };

    handleAddCount = () => {
        console.log('--handleAddCount--');

        this.setState({
            count: this.state.count + 1
        });
    };

    handleReport = (message) => {
        console.log('--handleReport--', message);
    };

    render() {
        return (
            <NowContext.Provider value={{
                state: this.state,
                report: this.handleReport,
                addCount: this.handleAddCount,
            }}>

                {this.props.children}

            </NowContext.Provider>
        );
    }
}