import React, { Component } from 'react';

import NowContext from './NowContext';

export default class NowProvider extends Component {
    state = {
        guid: '123456abcdefg',
        name: 'now app',
        bannerName: 'I am banner!',
    };

    handleReport = (message) => {
        console.log('--handleReport--', message);
    };

    render() {
        return (
            <NowContext.Provider value={{
                state: this.state,
                report: this.handleReport
            }}>

                {this.props.children}

            </NowContext.Provider>
        );
    }
}