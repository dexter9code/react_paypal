import "./phoneform.scss";
const PhoneForm = () => {
  return (
    <>
      <div className="phone_container">
        <h3>First, add your mobile number</h3>
        <div className="phone_actions">
          <label
            htmlFor="mobile-number"
            className="mobile_label mobile_label_hide"
          >
            Mobile number
          </label>
          <input
            type="tel"
            id="mobile-number"
            maxLength={11}
            autoComplete="tel-national"
            className="mobile_input"
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
