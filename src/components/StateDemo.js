import React from "react";

class StateDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date(), userName: 'StateTest' };
    }

    render() {
        return (
            <div>
                Hello {this.state.userName}
            </div>
        )
    }
}

export default StateDemo;

