import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import SideBar from './components/sideBar/responsiveView/ResponsiveView';
import SideBar from "./components/sideBar/SideBar";
import Router from "./router/Router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageToUrl from "./pages/imageToUrl/ImageToUrl";
import CustomLogin from "./popup/customLoginPopup/CustomLogin";

function App() {
  let a = undefined;
  return (
    <div className="App">
     
      <Router />
        {/* <CustomLogin /> */}
         
    </div>
  );
}

export default App;
