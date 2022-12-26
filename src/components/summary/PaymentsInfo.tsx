import "./paymentInfo.scss";
import { BiStore, BiUser } from "react-icons/bi";

type PaymentInfoProps = {
  amount: number;
  date: string;
  payment_to: string;
  payment_method: string;
  payment_send_to: string;
};

const PaymentsInfo = ({
  amount,
  date,
  payment_method,
  payment_to,
  payment_send_to,
}: PaymentInfoProps) => {
  return (
    <section className="pay_activity_container">
      <div className="pay__actions">
        <div className="pay__img_container">
          {payment_send_to === `user` ? (
            <BiUser size={35} color="white" />
          ) : (
            <BiStore size={35} color="white" />
          )}
        </div>
        <div className="pay_rest_container">
          <div className="pay_text_container">
            <h3>{payment_to}</h3>
            <p>{date}</p>
            <p>{payment_method}</p>
          </div>
          <p>- ${amount.toFixed(2)}</p>
        </div>
      </div>
    </section>
  );
};

export default PaymentsInfo;
