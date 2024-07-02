import React from 'react';
import logo from './logo.svg';
import './App.css';
// import SideBar from './components/sideBar/responsiveView/ResponsiveView';
import SideBar from './components/sideBar/SideBar';
// import Test from './components/Test';

function App() {
  let a = undefined
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <SideBar />
      {/* <Test /> */}
    </div>
  );
}

export default App;
