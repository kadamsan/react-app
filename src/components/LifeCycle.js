import React from 'react'

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "kapil"
        };

        console.log('Construtor life cycle invoked');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps life cycle invoked');
        if (props.name !== state.name) {
            //Change in props
            console.log('getDerivedStateFromProps change in props');
            return {
                name: props.name
            };
        }
        return null; // No change to state
    }
    /* if props changes then after getDerivedStateFromProps
       method, state will look something like 
  
    {
        name: props.name
    }
    */
    componentDidMount() {
        console.log('componentDidMount life cycle invoked');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate life cycle invoked');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate life cycle invoked');
        return null;
    }

    componentDidUpdate() {
        console.log('componentDidUpdate life cycle invoked');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount life cycle invoked');
    }

    changeState = () => {
        console.log('in change state function');
        this.setState({
            lastName: 'Strong'
        });
    }
    render() {
        console.log('render life cycle invoked');
        return (
            <div>
                <p>My name is {this.state.name} </p>
                <p>My last name is {this.state.lastName} </p>
                <button onClick={this.changeState} > Change state of last name </button>
            </div>
        )
    }
}

export default LifeCycle;