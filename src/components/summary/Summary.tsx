import "./summary.scss";
import SummaryBtn from "./btn/SummaryBtn";
import { RECENT_USER, USERS_CARDS } from "./../../data/user";
import RecentPayment from "./RecentPayment";
import { RxDotsVertical } from "react-icons/rx";
import { useState, useMemo } from "react";
import SummaryCard from "./SummaryCard";

const Summary = () => {
  const [floatShow, setFloatShow] = useState(false);
  const [float2Show, setFloat2Show] = useState(false);

  const fiveUsers = useMemo(() => {
    return RECENT_USER.slice(0, 5);
  }, []);

  return (
    <main className="summary__container">
      <section className="summary_activity">
        <h1>recent activity</h1>
      </section>
      <section className="summary_actions">
        <div className="buttons">
          <SummaryBtn title="send" />
          <SummaryBtn title="request" />
        </div>
        <div className="payments_text_container">
          <h1>Send again</h1>
          <div className={`dot_icon ${floatShow && `dot_icon_active`}`}>
            <RxDotsVertical
              size={25}
              onClick={() => setFloatShow((prevValue) => !prevValue)}
            />
          </div>
          {floatShow && (
            <div className="flot_one">
              <div className="float_one_actions">
                <p>Manage Contacts</p>
                <p>Send to Others</p>
              </div>
            </div>
          )}
        </div>
        <div className="summary_payments">
          {fiveUsers.map((user) => (
            <RecentPayment id={user.id} name={user.name} key={user.id} />
          ))}
        </div>
        <div className="summary_tab"></div>
        <div className="payments_bank_container">
          <h1>Banks and Cards</h1>
          <div className={`dot_icon ${float2Show && `dot_icon_active`}`}>
            <RxDotsVertical
              size={25}
              onClick={() => setFloat2Show((prevValue) => !prevValue)}
            />
          </div>
          {float2Show && (
            <div className="flot_two">
              <div className="float_two_actions">
                <p>Go to banks & cards</p>
                <p>Get help</p>
              </div>
            </div>
          )}
        </div>
        <div className="summary_cards_container">
          {USERS_CARDS.map((user) => (
            <SummaryCard
              cardType={user.cardType}
              number={user.number}
              type={user.type}
              key={user.id}
            />
          ))}
        </div>
        <div className="summary__title">
          <h1>Link a Card or Bank Account</h1>
        </div>
      </section>
    </main>
  );
};

export default Summary;
