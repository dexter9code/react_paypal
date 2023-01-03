import React, { useReducer, useState, useRef } from "react";
import paypalLogo from "../../assets/paypal-mark-color.svg";
import "./signContainer.scss";

type InitialProps = {
  value: string;
  isValid: null | boolean;
};

const initialState: InitialProps = {
  value: "",
  isValid: null,
};

type ACTIONTYPE =
  | { type: `addValue`; payload: string }
  | { type: `checkValid` }
  | { type: `checkAnimation` };

function emailReducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "addValue":
      return {
        value: action.payload,
        isValid: action.payload.includes("@") || null,
      };
    case "checkValid":
      return {
        value: state.value,
        isValid: state.value.includes("@"),
      };
    default:
      throw new Error();
  }
}

const SignInComp = () => {
  const [emailState, emailDispatch] = useReducer(emailReducer, initialState);
  const [changePosition, setChangePosition] = useState(false);

  const [password, setPassword] = useState("");
  const [changePositionPassword, setChangePositionPassword] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [hideShow, setHideShow] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <main className="sign_container">
      <div className="sign__innerContainer">
        <img src={paypalLogo} alt="paypal-logo" className="paypal_img" />
        <div className="sign_form_container">
          <form>
            <div
              onClick={() => {
                setChangePosition(true);
                emailRef.current?.focus();
              }}
              className={`email__container ${
                (emailState.value || changePosition) &&
                `email__container_with_value`
              }`}
            >
              <label htmlFor="email&mobile">Email or mobile number</label>
              <input
                ref={emailRef}
                type="text"
                title="email&mobile"
                value={emailState.value}
                onChange={(e) =>
                  emailDispatch({ type: "addValue", payload: e.target.value })
                }
                onBlur={() => {
                  emailDispatch({ type: "checkValid" });
                  setChangePosition(false);
                }}
                onFocus={() => setChangePosition(true)}
              />
            </div>

            <div
              onClick={() => {
                setChangePositionPassword(true);
                passwordRef.current?.focus();
              }}
              className={`password__container ${
                (password || changePositionPassword) &&
                `password__container_with_value`
              }`}
            >
              <label htmlFor="password">Password</label>
              <input
                ref={passwordRef}
                type={passwordShow ? `text` : `password`}
                title="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => {
                  setChangePositionPassword(false);
                  setHideShow(false);
                }}
                onFocus={() => {
                  setChangePositionPassword(true);
                  setHideShow(true);
                }}
              />
              <div
                className="password_show_container"
                onClick={() => setPasswordShow((preValue) => !preValue)}
              >
                {password && hideShow && `Show`}
              </div>
            </div>
            <p>Forgotten password?</p>
            <button type="button" className="sign_in__btn">
              Log In
            </button>
          </form>
        </div>
        <div className="login_line">
          <span className="line_one" />
          <p>or</p>
          <span className="line_two" />
        </div>
        <button type="button" className="sign_up__btn">
          Sign Up
        </button>
      </div>
    </main>
  );
};

export default SignInComp;
