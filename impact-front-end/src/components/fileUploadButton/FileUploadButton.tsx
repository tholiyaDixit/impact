import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import uploadIcon from "../../images/svg/upload.svg";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export interface FileUploadButtonProps {
  width: string;
  imgWidth: string;
  marginBottom: string;
  onChange: any;
}

export default function FileUploadButton(props: FileUploadButtonProps) {

  return (
    <div style={{ width: props.width, marginBottom: props.marginBottom }}>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        //   startIcon={<CloudUploadIcon />}
      >
        <img src={uploadIcon} alt="" width={props.imgWidth} />
        Upload file
        <VisuallyHiddenInput type="file" onChange={(e:any) => {props.onChange(e)}} />
      </Button>
    </div>
  );
}
