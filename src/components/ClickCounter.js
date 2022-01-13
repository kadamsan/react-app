import React from 'react'
import HigherOrderComponent from './HigherOrderComponent';

class ClickCounter extends React.Component {
    /*constructor(props) {
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
        return <div><button onClick={this.incrementCounter}>Clicked {this.state.count} times</button></div>
       
    }*/

    render() {
        const { count, incrementCounter} = this.props;
        return (
            <div><button onClick={incrementCounter}>Clicked {count} times</button></div>
        );
    }
}

export default HigherOrderComponent(ClickCounter);