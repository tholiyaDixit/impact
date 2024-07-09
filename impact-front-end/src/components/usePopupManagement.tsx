import { useEffect, useState } from "react";
import CustomLogin from "../popup/customLoginPopup/CustomLogin";

export default function usePopupManagement(props: any) {
  const [customLoginPopup, setCustomLoginPopup] = useState(false);
  const [propsData, setPropsData] = useState(true);

  console.log("props ---", props);
  

  useEffect(() => {
    !!props && !!props.popup && setCustomLoginPopup(true);
  }, []);

  const popupManage = () => {
    return (
      <>
        <CustomLogin
          open={customLoginPopup}
          onClosePopup={() => {
            setCustomLoginPopup(false);
          }}
        />
      </>
    );
  };

  return <>{popupManage()}</>;
}
