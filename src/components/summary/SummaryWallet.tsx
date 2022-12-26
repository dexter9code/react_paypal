import "./summaryWallet.scss";
import { RxDotsVertical } from "react-icons/rx";

const SummaryWallet = () => {
  return (
    <div className="summary_wallet_container">
      <div className="summary_wallet_title_container">
        <h3>PayPal balance</h3>
        <RxDotsVertical size={20} />
      </div>
      <h1>$2000.00</h1>
      <span>Available</span>
      <button className="summary_wallet_btn" type="button">
        Transfer Money
      </button>
    </div>
  );
};

export default SummaryWallet;
