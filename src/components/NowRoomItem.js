import React, { Component } from 'react';

export default class NowRoomItem extends Component {
    componentDidMount() {
        console.log('==', this.props.context);
        console.log('==', this.props);
    }

    render() {
        const { data = {} } = this.props;
        return (
            <div>
                <p>name={data.name}</p>
                <p>guid={data.guid}</p>
            </div>
        );
    }
}