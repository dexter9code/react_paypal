import "./footer.scss";
import {
  MAIN_LINKS,
  OTHER_LINKS,
  OTHER_LINKS2,
} from "./../../data/footerLinks";
import flag from "../../assets/Flag_of_India.svg";
import Tab from "../other/Tab";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_mainlinks_contents">
        <div>
          {MAIN_LINKS.map((item) => (
            <h3 key={item.id}>{item.title}</h3>
          ))}
        </div>
        <img src={flag} alt="flag-logo" />
      </div>
      <div className="footer_otherlinks_contents">
        <div>
          {OTHER_LINKS.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
        </div>
        <div className="other_links_actions">
          {OTHER_LINKS2.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
        </div>
      </div>
      <div className="footer_info">
        <p>
          PayPal Services in India are provided by PayPal Payments Private
          Limited (CIN U74990MH2009PTC194653). Users are advised to read the
          <h6> terms and conditions</h6> carefully.
        </p>
        <span>
          When you visit or interact with our sites, services, applications,
          tools or messaging, we or our authorised service providers may use
          cookies, web beacons, and other similar technologies for storing
          information to help provide you with a better, faster and safer
          experience and for advertising purposes. Learn more <h6>here.</h6>
        </span>
      </div>
      <Tab />
    </div>
  );
};

export default Footer;
