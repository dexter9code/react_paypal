import "./summaryNav.scss";
import paypalWhite from "../../assets/paypal_trans.svg";
import { SUMMARY_MENU } from "../../data/menu";
import { AiFillBell, AiFillSetting } from "react-icons/ai";

const SummaryNavbar = () => {
  return (
    <header className="nav__container">
      <nav>
        <section className="nav__action_one">
          <img src={paypalWhite} alt="paypal-logo" className="nav_img" />
          {SUMMARY_MENU.map((item) => (
            <h3 key={item.id} className="nav_sum__titles">
              {item.title}
            </h3>
          ))}
        </section>
        <section className="nav__action_two">
          <AiFillBell size={30} className="nav_icon" />
          <AiFillSetting size={30} className="nav_icon" />
          <h1>log out</h1>
        </section>
      </nav>
    </header>
  );
};

export default SummaryNavbar;
