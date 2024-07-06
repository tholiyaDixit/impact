import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "../components/sideBar/SideBar";
import ImageToUrl from "../pages/imageToUrl/ImageToUrl";
import SignUp from "../pages/signUp/SignUp";

const Router = () => {
  return (
    <>
      <BrowserRouter>
      <SideBar></SideBar>
          <Routes>
            <Route path="/Image Base64" element={<ImageToUrl />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default Router;

