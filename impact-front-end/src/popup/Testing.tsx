import React, { useEffect, useState } from "react";
import Popup from "../customPoupService/popup/Popup";

interface TestingProps {
  open?: boolean;
  onClose: any;
}
const Testing = (props: TestingProps) => {
  const [open, setOpen] = useState<boolean>(false);
  console.log("open ---", props.open);
  useEffect(() => {
    !!props.open && setOpen(props.open);
  }, [props.open]);
  return (
    <>
      {!!open && (
        <div>
          <Popup
            headerName={"Testing Popup"}
            openModal={true}
            width={"330px"}
            onClosePopup={() => {
              setOpen(false);
              props.onClose();
            }}
          >
            <p>testing</p>
            <button>OK</button>
            <button
              onClick={() => {
                setOpen(false);
                props.onClose();
              }}
            >
              Cancel
            </button>
          </Popup>
        </div>
      )}
    </>
  );
};

export default Testing;
