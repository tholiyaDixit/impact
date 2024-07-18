import { Box } from "@mui/material";
import React, { useState } from "react";
import "./CustomLogin.scss";
import useBreakPointView from "../../customHook/usebreakPointView";
import { useNavigate } from "react-router-dom";

interface customLoginPopup {
  open: boolean;
  onClosePopup: any;
}
const CustomLogin = (props: customLoginPopup) => {
  const navigate = useNavigate();
  let mobileView = useBreakPointView();
  // console.log("mobileView ---", mobileView);

  const [openNextModal, setOpenNextModal] = useState(false);

  return (
    <>
      {/* CustomLogin */}
      {!!props.open && (
        // <Box component="main" sx={{ flexGrow: 1, p: 3 }} mt={7}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            // width:"100%"
          }}
        >
          {/* <h1>CustomLogin</h1> */}
          <div className="box">
            <div className="box-form">
              <div className="box-login-tab"></div>
              <div
                className="box-login-title"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                {/* <div className="b b-info i i-left"></div> */}
                <h2>LOGIN</h2>
                <button
                  //   onclick="closeLoginInfo();"
                  onClick={() => {
                    props.onClosePopup();
                  }}
                  className="b b-info i i-left"
                  title="Back to Sign In"
                ></button>
              </div>
              {/* testing */}
              {/* <div dangerouslySetInnerHTML={html} /> */}
              {/* testing */}
              <div className="box-login">
                <div className="fieldset-body" id="login_form">
                  <button
                    onClick={() => {
                      setOpenNextModal(true);
                    }}
                    className="b b-form i i-more"
                  ></button>
                  {/* <div dangerouslySetInnerHTML={html} />  */}
                  <p className="field">
                    <label>E-MAIL</label>
                    <input type="text" id="user" name="user" title="Username" />
                    <span id="valida" className="i i-warning"></span>
                  </p>
                  <p className="field">
                    <label>PASSWORD</label>
                    <input
                      type="password"
                      id="pass"
                      name="pass"
                      title="Password"
                    />
                    <span id="valida" className="i i-close"></span>
                  </p>

                  <label className="checkbox">
                    <input
                      type="checkbox"
                      value="TRUE"
                      title="Keep me Signed in"
                    />{" "}
                    Keep me Signed in
                  </label>

                  <input
                    type="submit"
                    id="do_login"
                    value="Login"
                    title="Get Started"
                  />
                </div>
              </div>
            </div>
            <div
              className="box-info"
              style={{
                right: openNextModal
                  ? mobileView >= 888
                    ? "-235px"
                    : "45px"
                  : "45PX",
                top: openNextModal
                  ? mobileView >= 888
                    ? "45px"
                    : "320px"
                  : "112px",
              }}
            >
              <p>
                <button
                  //   onclick="closeLoginInfo();"
                  onClick={() => {
                    setOpenNextModal(false);
                  }}
                  className="b b-info i i-left"
                  title="Back to Sign In"
                ></button>
                <h3>Need Help?</h3>
              </p>
              <div className="line-wh"></div>
              <button
                onClick={() => {
                  navigate("forgot-password");
                }}
                className="b-support"
                title="Forgot Password?"
              >
                {" "}
                Forgot Password?
              </button>
              <button
                //   onclick=""
                className="b-support"
                title="Contact Support"
              >
                {" "}
                Contact Support
              </button>
              <div className="line-wh"></div>
              <button
                onClick={() => {
                  navigate("signUp");
                  props.onClosePopup();
                }}
                className="b-cta"
                title="Sign up now!"
              >
                {" "}
                CREATE ACCOUNT
              </button>
            </div>
            {/* )} */}
          </div>
        </div>
        // </Box>
      )}
    </>
  );
};

export default CustomLogin;
