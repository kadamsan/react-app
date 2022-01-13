import React from "react";

class EventHandling extends React.Component {

    constructor(props) {
        super(props);
        this.state = { uname: "John" };

        // This binding is necessary to make `this` work in the callback
        this.eventHandler = this.eventHandler.bind(this);

    }

    eventHandler() {
        console.log("button clicked and this is:", this);
        this.setState(
            {
                uname: "Smith"
            }
        );
    };
    handleClick = () => {
        console.log('Click handled this is:', this);
        this.setState(
            {
                uname: "Jerry"
            }
        );
    }
    handleDoubleClick() {
        console.log("button clicked double and this is:", this);
        this.setState(
            {
                uname: "Double"
            }
        );
    };

    render() {
        return (
            <div>
                <p>Hello, {this.state.uname}</p>
                <button onClick={this.eventHandler}>Please Click</button>
                <button onClick={this.handleClick}>Click Me</button>
                <button onDoubleClick={() => this.handleDoubleClick()}>Double Click</button>
            </div>
        );
    }
}

export default EventHandling;