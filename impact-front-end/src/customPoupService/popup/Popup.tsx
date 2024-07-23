import React, { useState } from "react";
import "./Popup.css";

interface PopupProps {
  children: any;
  headerName: string;
  openModal: boolean;
  width: string;
  onClosePopup: any;
}

const Popup = (props: PopupProps) => {
  // let centerPopup = props.center / 2;
  console.log("popupProps ---", props);
  const styles = {
    width: `${props.width}`,
  };
  const propsModal = props.openModal || false;
  const [openModal, setOpenModel] = useState<boolean>(propsModal);

  return (
    <>
      {!!openModal && (
        <div>
          <div className="mainPopup" style={styles}>
            <div className="header">
              <span className="headerName">{props.headerName}</span>
              <button
                //   onclick="closeLoginInfo();"
                onClick={() => {
                  props.onClosePopup();
                }}
                className="b b-info i i-left"
                title="Back to Sign In"
              ></button>
            </div>
            <div className="popupBody">
              <div>{props.children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
