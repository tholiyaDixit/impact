import { useEffect, useState } from "react";
import CustomLogin from "../popup/customLoginPopup/CustomLogin";


export default function usePopupManagement(props: any) {
  const [customLoginPopup, setCustomLoginPopup] = useState(false);

  useEffect(() => {
    !!props && !!props.popup && setCustomLoginPopup(true);
  }, []);

  const popupManage = () => {
    return(
      <>
      <CustomLogin
        open={customLoginPopup}
        onClosePopup={() => {
          setCustomLoginPopup(false);
        }}
      />
      </>
    )
  }

  return (
    <>
      {popupManage()}
    </>
  );
}
