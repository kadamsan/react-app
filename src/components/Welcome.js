

function Welcome(props) {
    if (props.name) {
        return <div><h2>Hello, {props.name} from Welcome Component - {props.children} </h2> </div>
    }
    return <h2>Hello, Stranger from Welcome Component</h2>;
}

export default Welcome;  