import React, { Component } from 'react';

import CmsContext from './CmsContext';

export default class CmsProvider extends Component {
    state = {
        name: 'Wes',
        age: 100,
        cool: true
    };

    render() {
        return (
            <CmsContext.Provider value={{
                state: this.state,
                growAYearOlder: () => this.setState({
                    age: this.state.age + 1
                })
            }}>
                {this.props.children}
            </CmsContext.Provider>
        );
    }
}