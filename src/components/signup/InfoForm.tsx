import {
  addConfirmPassword,
  addPassword,
  addUserName,
} from "../../features/SignupSlice";
import { RootState } from "../../store/store";
import "./infoForm.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const InfoForm = () => {
  const usernameInfo = useSelector((state: RootState) => state.singup.username);
  const passwordInfo = useSelector((state: RootState) => state.singup.password);
  const confirmPasswordInfo = useSelector(
    (state: RootState) => state.singup.confirmPassword
  );

  const [isUsernameError, setIsUsernameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false);

  const dispatch = useDispatch();
  return (
    <div className="infoform_contianer">
      <h4>create username and password</h4>
      <div className="info_actions">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          title="username"
          className={`username_input ${isUsernameError && `error_input`}`}
          required={true}
          value={usernameInfo}
          onChange={(e) => dispatch(addUserName(e.target.value))}
          onFocus={() => setIsUsernameError(false)}
          onBlur={(e) => {
            if (!usernameInfo) setIsUsernameError(true);
          }}
        />
      </div>
      <div className="info_actions">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          title="password"
          className={`username_input ${isPasswordError && `error_input`}`}
          value={passwordInfo}
          required={true}
          onChange={(e) => dispatch(addPassword(e.target.value))}
          onFocus={() => setIsPasswordError(false)}
          onBlur={() => {
            if (!passwordInfo) setIsPasswordError(true);
          }}
        />
      </div>
      <div className="info_actions">
        <label htmlFor="confirmPassword">confirm Password</label>
        <input
          type="password"
          title="confirmPassword"
          value={confirmPasswordInfo}
          className={`username_input ${
            isConfirmPasswordError && `error_input`
          }`}
          onChange={(e) => dispatch(addConfirmPassword(e.target.value))}
          onFocus={() => setIsConfirmPasswordError(false)}
          onBlur={() => {
            if (!confirmPasswordInfo) setIsConfirmPasswordError(true);
          }}
        />
      </div>
    </div>
  );
};

export default InfoForm;
