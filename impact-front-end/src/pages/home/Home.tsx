import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import usePopupManagement from "../../components/usePopupManagement";
import CustomLogin from "../../popup/customLoginPopup/CustomLogin";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const Home = () => {
  const persons = useAppSelector((state: any) => state.popup.manageAppPopup);
  // const location = useLocation();
  // const data = location.state;
  const PopupManagement = usePopupManagement(persons[0]);

  // const popupData = useAppDispatch((state:any)=> state.popup)
  console.log("persons ---", persons);

  // useEffect(() => {
  //     !!data && !!data.popup && setCustomLoginPopup(true)
  // },[])

  return <div>{PopupManagement}</div>;
};

export default Home;
