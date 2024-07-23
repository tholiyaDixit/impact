import React, { useEffect, useState } from "react";
import Popup from "../../customPoupService/popup/Popup";
import useBreakPointView from "../../customHook/usebreakPointView";

interface LoginProps {
  open?: boolean;
  onClose: any;
}

const Login = (props: LoginProps) => {
  let mobileView = useBreakPointView();

  const [loginModal, setLoginModal] = useState(false);
  const [openNextModal, setOpenNextModal] = useState(false);

  useEffect(() => {
    !!props.open && setLoginModal(props.open);
  }, [props.open]);

  return (
    <>
      {!!loginModal && (
        <div>
          <Popup
            headerName={"LOGIN"}
            openModal={true}
            width={"330px"}
            onClosePopup={() => {
              setLoginModal(false);
              props.onClose();
            }}
          >
            <div style={{position:"relative",zIndex:1}}>
              <div className="">
                <div className="fieldset-body" id="login_form" style={{backgroundColor:"#fff"}}>
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
                    ? "-248px"
                    : "45px"
                  : "45PX",
                top: openNextModal
                  ? mobileView >= 888
                    ? "45px"
                    : "320px"
                  : "85px",
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
                //   navigate("forgot-password");
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
                //   navigate("signUp");
                //   props.onClosePopup();
                }}
                className="b-cta"
                title="Sign up now!"
              >
                {" "}
                CREATE ACCOUNT
              </button>
            </div>
          </Popup>
        </div>
      )}
    </>
  );
};

export default Login;
