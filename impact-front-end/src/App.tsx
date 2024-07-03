import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import SideBar from './components/sideBar/responsiveView/ResponsiveView';
import SideBar from "./components/sideBar/SideBar";
import Router from "./router/Router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageToUrl from "./pages/imageToUrl/ImageToUrl";

function App() {
  let a = undefined;
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
      {/* <SideBar /> */}
      {/* <Test /> */}
      {/* <BrowserRouter> */}
      <Router />
          {/* <Routes>
            <Route path="/ImageToUrl" element={<ImageToUrl />} />
          </Routes>
        </BrowserRouter> */}
    </div>
  );
}

export default App;
