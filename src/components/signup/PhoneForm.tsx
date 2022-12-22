import { addPhone } from "../../features/SignupSlice";
import { RootState } from "../../store/store";
import "./phoneform.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const PhoneForm = () => {
  const dispatch = useDispatch();
  const currentPh = useSelector((state: RootState) => state.singup.phoneNumber);
  const [isError, setIsError] = useState(false);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const reg = new RegExp("(^[0-9]+$|^$)");
    if (!reg.test(e.target.value)) return;
    dispatch(addPhone(e.target.value));
  }

  function onBlurHandler() {
    if (currentPh.length !== 10) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }

  return (
    <>
      <div className="phone_container">
        <h3>First, add your mobile number</h3>
        <div className="phone_actions">
          <label
            htmlFor="mobile-number"
            className={`mobile_label ${currentPh && `mobile_label_hide`}`}
          >
            Mobile number
          </label>
          <input
            value={currentPh}
            type="text"
            id="mobile-number"
            maxLength={10}
            autoComplete="tel-national"
            className={`mobile_input ${isError && `mobile_input_error`}`}
            onFocus={() => setIsError(false)}
            onChange={onChangeHandler}
            required={true}
            onBlur={onBlurHandler}
          />
        </div>
        <p>
          By continuing, you confirm that you're the owner or primary user of
          this mobile phone number. You agree to receive automated SMS to
          confirm your phone number. Message and data rates may apply.
        </p>
      </div>
    </>
  );
};

export default PhoneForm;
