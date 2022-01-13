// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Greet';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import Clock from './components/Clock';
import StateExample from './components/StateExample';
import StateDemo from './components/StateDemo';
import EventHandling from './components/EventHandling';
import ConditonalRendering from './components/ConditionalRendering';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import LifeCycle from './components/LifeCycle';
import NameForm from './components/NameForm';
import Routing from './components/Routing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { /*<img src={logo} className="App-logo" alt="logo" />*/ }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to learn React
        </a>
        <Routing />
        <NameForm />
        <LifeCycle name = "sachin"/>
        <HoverCounter />
        <ClickCounter />
        <ConditonalRendering />
        <EventHandling />
        <StateExample />
        <StateDemo />
        <Clock />
        <Greet />
        <Hello />
        <Welcome name="Sara"> This is child props </Welcome>
        <Welcome />
        <Greeting name="Mike" />
        <Greeting />
      </header>
    </div>
  );
}

export default App;
