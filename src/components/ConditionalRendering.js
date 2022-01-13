import React from 'react'

class ConditonalRendering extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        if (isLoggedIn) {
            return <div>Welcome John</div>
        } else {
            return <div>Welcome Guest</div>
        }
    }
}

export default ConditonalRendering;