import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import "./ImageToUrl.scss";
// import Button from "../../components/button/Button";
import { Button, ButtonProps, buttonClasses } from "@mui/base/Button";
import { LinearProgress } from "@mui/material";

const ButtonRoot = React.forwardRef(function ButtonRoot(
  props: React.PropsWithChildren<{}>,
  ref: React.ForwardedRef<any>
) {
  const { children, ...other } = props;

  return (
    <svg width="150" height="50" {...other} ref={ref}>
      <polygon points="0,50 0,0 150,0 150,50" className="bg" />
      <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
      <foreignObject x="0" y="0" width="150" height="50">
        <div className="content">{children}</div>
      </foreignObject>
    </svg>
  );
});

const SvgButton = React.forwardRef(function SvgButton(
  props: ButtonProps,
  ref: React.ForwardedRef<any>
) {
  return <Button {...props} slots={{ root: CustomButtonRoot }} ref={ref} />;
});

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E6",
  700: "#0059B3",
  800: "#004C99",
  900: "#003A75",
};

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }: { theme: Theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${theme.palette.mode === "light" ? blue[600] : blue[200]};
  --hover-color: ${theme.palette.mode === "light" ? blue[50] : blue[900]};
  --active-color: ${theme.palette.mode === "light" ? blue[100] : blue[800]};

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }

  & .bg {
    stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 120 600;
    stroke-dashoffset: 120;
    fill: transparent;
  }

  &:hover,
  &.${buttonClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonClasses.focusVisible} {
    outline: 2px solid ${theme.palette.mode === "dark" ? blue[700] : blue[200]};
    outline-offset: 2px;
  }

  &.${buttonClasses.active} {
    & .bg {
      fill: var(--active-color);
      transition: fill 150ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-size: 0.875rem;
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      line-height: 1.5;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
    }

    & svg {
      margin: 0 4px;
    }
  }`
);

const ImageToUrl = () => {
  const [baseImage, setBaseImage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const uploadImage = async (e: any) => {
    setLoading(true);
    const file = e.target.files[0];
    const base64: any = await convertBase64(file);
    console.log("base64 ---", base64);

    setBaseImage(base64);
    setLoading(false);
  };
  console.log("loading ---", loading);

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }} mt={2}>
      {/* <div> */}
      {/* <DrawerHeader /> */}
      <h1>ImageToUrl</h1>
      <div className="imageUploadUrl">
        <div className="uploadFile">
          <input
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
          />
        </div>
        <div>
          <div className="encodedUrl">
            {!!baseImage ? (
              <>
                <div className="copyUrl">
                  <SvgButton
                    onClick={() => {
                      {
                        navigator.clipboard.writeText(baseImage);
                      }
                    }}
                  >
                    Copy
                  </SvgButton>
                </div>
              </>
            ) : (
              <>
                {loading && (
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress />
                  </Box>
                )}
              </>
            )}

            {baseImage}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ImageToUrl;
