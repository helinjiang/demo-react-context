import React, { Component } from 'react';

import NowContext from './NowContext';
import NowRoomItem from './NowRoomItem';

export default class NowRoom extends Component {
    render() {
        return (
            <div>
                <NowContext.Consumer>
                    {(context) => (
                        <NowRoomItem data={context.state} context={context} handleChange={this.props.handleChange} />
                    )}
                </NowContext.Consumer>
            </div>
        );
    }
}