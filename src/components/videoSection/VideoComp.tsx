import "./videoComp.scss";
import paypalVideo from "../../assets/paypal_vid_sm.mp4";
import CommonBtn from "../other/CommonBtn";

const VideoComp = () => {
  return (
    <section className="videoSection">
      <div className="info">
        <h1>fast, safe, social payments</h1>
        <p>
          Pay. Get paid. Shop. Share. Join tens of millions of people on Paypal.
        </p>
      </div>
      <div className="gif">
        <img src="/public/paypal_sm.gif" alt="logo" />
      </div>
      <div className="video">
        <video src={paypalVideo} autoPlay muted playsInline></video>
      </div>
      <div className="video__footer">
        <h1>
          Looking for PayPal Business Solutions? Whether you are freelancer or a
          business, we are here to support you.
        </h1>
        <CommonBtn btnType="login" title="paypal for business" />
      </div>
    </section>
  );
};

export default VideoComp;
