import { Box, Checkbox } from "@mui/material";
import React from "react";
import "./SignUp.scss";
import TextField from "@mui/material/TextField";
import facebookIcon from "../../images/svg/facebook.svg";
import googleIcon from "../../images/svg/google.svg";
import { useNavigate } from "react-router-dom";
import useIsAtBreakpoint from "../../customHook/usebreakPointView";
import { useDispatch } from "react-redux";
// import {
//   addPopup,
//   manageAppPopupSlice,
// } from "../../redux/managePopup/managePopup";
// import { useAppDispatch } from "../../redux/store";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SignUp = () => {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const mobile = useIsAtBreakpoint();

  const [customLoginPopup, setCustomLoginPopup] = React.useState(false);

  let reduxData = {
    popup: "login",
    show: true,
  };
  const userDispatch = () => {
    // dispatch(managePopup(reduxData));
    // console.log("addUser ---", name);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1 }} mt={8}>
      <div className="pageImg">
        {/* <h1>SignUp Page</h1> */}
        <div
          className="singUpFor"
          style={{ flexDirection: mobile >= 970 ? "row" : "column" }}
        >
          <div
            className={"leftSide"}
            style={{ width: mobile >= 970 ? "50%" : "100%" }}
          >
            <div className="info">
              <div className="centerInfo">
                <div className="infoText">
                  <p className="welcome">Hi Welcome!</p>
                  <h2 style={{ textAlign: "start" }} className="letsStart">
                    Let's Get Started
                  </h2>
                  <p>
                    Create free account and get free access of full features for
                    7 days. We invite you to join us and get better experience.
                  </p>
                  <img
                    src={require("../../images/signup/man-1459246_1280.webp")}
                    alt=""
                    width={"68%"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="rightSide"
            style={{ width: mobile >= 970 ? "50%" : "100%" }}
          >
            {/* <h1>SingUp Form</h1> */}
            <div className="signUpForm">
              <TextField
                id="standard-textarea"
                label="Your Name"
                placeholder="Enter Your Name"
                multiline
                variant="standard"
                className="inputBox"
              />
              <TextField
                id="standard-textarea"
                label="Your Email"
                placeholder="Enter Your Email"
                multiline
                variant="standard"
                className="inputBox"
              />
              <TextField
                id="standard-textarea"
                label="Your Password"
                placeholder="Enter Your Password"
                multiline
                variant="standard"
                className="inputBox"
              />
              <TextField
                id="standard-textarea"
                label="Conform Password"
                placeholder="Enter Conform Password"
                multiline
                variant="standard"
                className="inputBox"
              />
              <div className="checkBox">
                <input type="checkbox" name="" id="" />
                Remember me
              </div>
              <div className="signUpButton">
                <button className="createAccount">Create Account</button>
                <p style={{ margin: "0px" }}>OR</p>
                <button className="signUpOtherWay">
                  {" "}
                  <img src={facebookIcon} alt="" width={"20px"} /> &nbsp; Signup
                  with Facebook
                </button>
                <button className="signUpOtherWay">
                  {" "}
                  <img src={googleIcon} alt="" width={"20px"} /> &nbsp; Signup
                  with Google
                </button>
              </div>

              <div className="LoginPopup">
                Already have an account?{" "}
                <button
                  className="openLoginPopup"
                  // onClick={() => {
                  //   // setCustomLoginPopup(true)
                  //   // dispatch(addUser(reduxData));
                  //   dispatch(manageAppPopupSlice(reduxData));
                  //   // navigate("/", { state: { popup: "login" } });
                  //   navigate("/");
                  // }}
                  onClick={() => {
                    // dispatch(addPopup({ popup: "login", show: true }));
                    console.log("call addPopup ---");
                    navigate("/");
                  }}
                >
                  {" "}
                  Login Here{" "}
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default SignUp;
