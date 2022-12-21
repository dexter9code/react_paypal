import SignupWrapper from "./SignupWrapper";
import "./infoForm.scss";

const InfoForm = () => {
  return (
    <div className="infoform_contianer">
      <h4>create username and password</h4>
      <div className="info_actions">
        <label htmlFor="username">Username</label>
        <input type="text" title="username" />
      </div>
      <div className="info_actions">
        <label htmlFor="password">Password</label>
        <input type="password" title="password" />
      </div>
      <div className="info_actions">
        <label htmlFor="confirmPassword">confirm Password</label>
        <input type="password" title="confirmPassword" />
      </div>
    </div>
  );
};

export default InfoForm;
