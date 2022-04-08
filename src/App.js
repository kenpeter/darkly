// https://www.youtube.com/watch?v=CacXKjYURdo
import logo from './logo.svg';
import './App.css';
import {withLDProvider, useFlags} from 'launchdarkly-react-client-sdk';

function Comp1() {
  return <div>comp1</div>
}

function Comp2() {
  return <div>comp2</div>
}

function Comp3() {
  return <div>comp3</div>
}

function App() {
  const {mytestFlag, boolFlag} = useFlags();
  const stageFlag = mytestFlag;

  console.log('++ var:', stageFlag, 'boolFlag', boolFlag)

  let comp = ''
  if(stageFlag === 'stage1') {
    comp = <Comp1></Comp1>;
  } else if(stageFlag === 'stage2') {
    comp = <Comp2></Comp2>;
  } else if(stageFlag === 'stage3') {
    comp = <Comp3></Comp3>;
  } else {
    comp = 'nothing';
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {comp}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withLDProvider({
  clientSideID: '625025ec35547d15230508bc',
  options: {
    bootstrap: 'localStorage'
  }
})(App);
