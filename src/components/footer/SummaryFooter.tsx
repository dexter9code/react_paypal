import "./summaryFooter.scss";
import paypalSvg from "../../assets/paypal-color.svg";

const SummaryFooter = () => {
  return (
    <footer className="summary_footer_container">
      <div className="summary_outer_container">
        <div className="summary_footer_img_container">
          <img src={paypalSvg} alt="paypal-logo" />
        </div>
        <h3>Help</h3>
        <h3>Contact</h3>
        <h3>Security</h3>
      </div>
    </footer>
  );
};

export default SummaryFooter;
