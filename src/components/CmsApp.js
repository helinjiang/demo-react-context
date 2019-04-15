import React, { Component } from 'react';

import Family from './Family';
import CmsProvider from './CmsProvider';

export default class CmsApp extends Component {
    render() {
        return (
            <CmsProvider>
                <div>
                    <h1>I am the cms app</h1>
                    <Family />
                </div>
            </CmsProvider>
        );
    }
}