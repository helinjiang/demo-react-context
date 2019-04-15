import React, { Component } from 'react';

import NowProvider from './NowProvider';
import NowBanner from './NowBanner';
import NowRoom from './NowRoom';

export default class NowApp extends Component {
    render() {
        return (
            <NowProvider>
                <div>
                    <h1>I am the now app</h1>
                    <NowBanner />
                    <NowRoom />
                </div>
            </NowProvider>
        );
    }
}