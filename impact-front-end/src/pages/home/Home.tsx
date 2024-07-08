import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import usePopupManagement from '../../components/usePopupManagement';
import CustomLogin from '../../popup/customLoginPopup/CustomLogin';

const Home = () => {
    const location = useLocation();
    const data = location.state;
    const PopupManagement = usePopupManagement(data)

    // useEffect(() => {
    //     !!data && !!data.popup && setCustomLoginPopup(true)
    // },[])

  return (
    <div>
       {PopupManagement}
    </div>
  )
}

export default Home
