import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "../components/sideBar/SideBar";
import ImageToUrl from "../pages/imageToUrl/ImageToUrl";

const Router = () => {
  return (
    <>
      <BrowserRouter>
      <SideBar></SideBar>
          <Routes>
            <Route path="/Image Base64" element={<ImageToUrl />} />
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default Router;

