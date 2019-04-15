import React, { Component } from 'react';

export default class NowRoomItem extends Component {
    state = {
        myCount: 0
    };

    componentDidMount() {
        console.log('=componentDidMount=', this.props.context);
        console.log('=componentDidMount=', this.props);
    }

    handleAddMyCount = () => {
        this.setState({
            myCount: this.state.myCount + 1
        });
    };

    render() {
        const { data = {}, context, handleChange } = this.props;
        const { myCount } = this.state;

        return (
            <div>
                <p>name={data.name}</p>
                <p>guid={data.guid}</p>
                <p>guid={data.count}</p>
                <p>myCount={myCount}</p>

                <button onClick={context.addCount}>点击增加计数1</button>
                <button onClick={this.handleAddMyCount}>点击增加计数2</button>
                <button onClick={handleChange}>切换 provide</button>
            </div>
        );
    }
}