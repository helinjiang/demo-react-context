import React, { Component } from 'react';

import CmsContext from './CmsContext';

export default class Person extends Component {
    render() {
        return (
            <div className="person">
                <CmsContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <p>Age: {context.state.age}</p>
                            <p>Name: {context.state.name}</p>
                            <button onClick={context.growAYearOlder}>🍰🍥🎂</button>
                        </React.Fragment>
                    )}
                </CmsContext.Consumer>
            </div>
        );
    }
}