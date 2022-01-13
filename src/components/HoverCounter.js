import React from 'react'

class HoverCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0  };
    }
    
    incrementCounter = () => {
        this.setState(
            prevState => {
                return { count : prevState.count + 1}
            }
        );

    }
    

    render() {
        return <div><h3 onMouseOver={this.incrementCounter}>Clicked {this.state.count} times</h3></div>
       
    }
}

export default HoverCounter;