import React, { Component } from 'react';

import NowContext from './NowContext';

export default class NowBanner extends Component {
    render() {
        return (
            <div>
                <NowContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <p>bannerName: {context.state.bannerName}</p>
                        </React.Fragment>
                    )}
                </NowContext.Consumer>
            </div>
        );
    }
}