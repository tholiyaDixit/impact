import { Box, Checkbox } from "@mui/material";
import React, { useEffect } from "react";
import "./SignUp.scss";
import TextField from "@mui/material/TextField";
import facebookIcon from "../../images/svg/facebook.svg";
import googleIcon from "../../images/svg/google.svg";
import { useNavigate } from "react-router-dom";
import useIsAtBreakpoint from "../../customHook/usebreakPointView";
import { useDispatch } from "react-redux";
import Testing from "../../popup/Testing";
import CustomLogin from "../../popup/customLoginPopup/CustomLogin";
import Login from "../../popup/login/Login";
import {
  conformPasswordValidation,
  emailValidation,
  IValidation,
  nameValidation,
  passwordValidation,
} from "../../utils/validation";
import { useAddUserMutation } from "../../redux/userApi/UserApi";
import { getUUId } from "../../utils/getUserUUId";
import { setUser } from "../../redux/reducers/userReducers";
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
  const dispatch = useDispatch();

  // const [customLoginPopup, setCustomLoginPopup] = React.useState(false);
  const [openLoginPopup, setOpenLoginPopup] = React.useState(false);
  const [validationError, setValidationError] =
    React.useState<App.User.UserFormValidation>({
      firstName: "",
      email: "",
      password: "",
      conformPassword: "",
    });

  const [userSignData, setUserSignData] = React.useState<App.User.UserSignUp>({
    firstName: "",
    email: "",
    password: "",
    conformPassword: "",
  });

  const [addUser, { data: userData, isError, isLoading, error, isSuccess }] =
    useAddUserMutation();

  const signUpHandler = async (event: any) => {
    event.preventDefault();

    const checkFirstName: IValidation = nameValidation(
      userSignData.firstName,
      "First Name"
    );

    const checkEmail: IValidation = emailValidation(userSignData.email);
    const checkPassword: IValidation = passwordValidation(
      userSignData.password
    );
    const checkConformPassword: IValidation = conformPasswordValidation(
      userSignData.conformPassword,
      userSignData.password
    );

    setValidationError({
      firstName: checkFirstName.message,
      email: checkEmail.message,
      password: checkPassword.message,
      conformPassword: checkConformPassword.message,
    });

    // console.log("allData ---", userSignData);
    // console.log("checkFirstName ---", checkFirstName);
    // console.log("checkEmail ---", checkEmail);
    // console.log("checkPassword ---", checkPassword);
    // console.log("conformPassword ---", checkConformPassword);
    let deviceId = getUUId();
    let userData = {
      ...userSignData,
      deviceId,
    };
    if (
      checkFirstName.validation &&
      checkEmail.validation &&
      checkPassword.validation &&
      checkConformPassword.validation
    ) {
      await addUser(userData);
      setUserSignData({
        email: "",
        conformPassword: "",
        password: "",
        firstName: "",
      });
    }
  };

  useEffect(() => {
    if (!!userData) {
      dispatch(setUser(userData))
    }
  }, [])


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
                label="First Name"
                placeholder="Enter First Name"
                multiline
                variant="standard"
                className="inputBox"
                onChange={(e: any) => {
                  setUserSignData({
                    ...userSignData,
                    firstName: e.target.value,
                  });
                }}
                value={userSignData.firstName}
                error={validationError.firstName == "" ? false : true}
              />
              <TextField
                id="standard-textarea"
                label="Your Email"
                placeholder="Enter Your Email"
                multiline
                variant="standard"
                className="inputBox"
                onChange={(e: any) => {
                  setUserSignData({ ...userSignData, email: e.target.value });
                }}
                value={userSignData.email}
                error={validationError.email == "" ? false : true}
              />
              <TextField
                id="standard-textarea"
                label="Your Password"
                placeholder="Enter Your Password"
                multiline
                variant="standard"
                className="inputBox"
                onChange={(e: any) => {
                  setUserSignData({
                    ...userSignData,
                    password: e.target.value,
                  });
                }}
                value={userSignData.password}
                error={validationError.password == "" ? false : true}
              />
              <TextField
                id="standard-textarea"
                label="Conform Password"
                placeholder="Enter Conform Password"
                multiline
                variant="standard"
                className="inputBox"
                onChange={(e: any) => {
                  setUserSignData({
                    ...userSignData,
                    conformPassword: e.target.value,
                  });
                }}
                value={userSignData.conformPassword}
                error={validationError.conformPassword == "" ? false : true}
              />
              <div className="checkBox">
                <input type="checkbox" name="" id="" />
                Remember me
              </div>
              <div className="signUpButton">
                <button className="createAccount" onClick={signUpHandler}>
                  Create Account
                </button>
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
                    // console.log("call addPopup ---");
                    // navigate("/");
                    setOpenLoginPopup(true);
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
      {
        !!openLoginPopup && (
          // <Testing open={openLoginPopup} onClose={() => {setOpenLoginPopup(false)}} />
          <Login
            open={openLoginPopup}
            onClose={() => {
              setOpenLoginPopup(false);
            }}
          />
        )
        // <CustomLogin open={true} onClosePopup={() => {setOpenLoginPopup(false)}} />
      }
    </Box>
  );
};

export default SignUp;
