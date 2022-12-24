import "./recent_payment.scss";
import { RECENT_USER } from "./../../data/user";
import { COLORS } from "../../data/colors";
import React from "react";

type RecentPaymentProps = {
  id: number;
  name: string;
};

const RecentPayment = ({ id, name }: RecentPaymentProps) => {
  const randomNumber = Math.trunc(Math.random() * COLORS.length);
  let randomColor = COLORS[randomNumber];
  const namesArr = name.split(" ");
  let nameStr = "";
  namesArr.forEach((value) => {
    nameStr += value[0];
  });

  return (
    <div className="payment_root">
      <div
        className="payment_container"
        style={{ backgroundColor: `${randomColor}` }}
      >
        <p>{nameStr}</p>
      </div>
      <div className="payment_names">
        {namesArr.map((name) => (
          <p key={name}>{name}</p>
        ))}
      </div>
    </div>
  );
};

export default React.memo(RecentPayment);
