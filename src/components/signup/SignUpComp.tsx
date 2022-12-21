import InfoForm from "./InfoForm";
import PhoneForm from "./PhoneForm";
import "./signupComp.scss";
import { useMultiform } from "../../hooks/useMultiform";
import { BsChevronLeft } from "react-icons/bs";
import colorPaypalLogo from "../../assets/paypal_color_logo.svg";

const SingupComp = () => {
  const { backPage, step, nextPage, isFirstPage, isLastPage } = useMultiform([
    <PhoneForm />,
    <InfoForm />,
  ]);
  return (
    <div className="signup__container">
      <div className="singup__actions_wrapper">
        <div className="singup_img_wrapper">
          <img src={colorPaypalLogo} alt="paypal-logo" />
        </div>
        <h1>Sign up for PayPal</h1>
        <form>
          <div>{step}</div>
          {isFirstPage && (
            <BsChevronLeft
              onClick={() => backPage()}
              className="singup_back"
              size={35}
              color={"#78c7e9"}
            />
          )}
          <button
            type="button"
            className="signup__btn"
            onClick={() => nextPage()}
          >
            {isLastPage ? `Submit` : `Next`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingupComp;
