import "./videoComp.scss";
import paypalVideo from "../../assets/paypal_vid_sm.mp4";
import CommonBtn from "../other/CommonBtn";
import { useRef, useEffect, useState } from "react";
import ShoppingBtn from "../other/ShoppingBtn";

const VideoComp = () => {
  const shoppingInfoRef = useRef<HTMLDivElement>(null);
  const packageInfoRef = useRef<HTMLDivElement>(null);
  const [shoppingShow, setShoppingShow] = useState<boolean>();
  const [packageShow, setPackageShow] = useState<boolean>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShoppingShow(entry.isIntersecting);

        if (entry.isIntersecting) observer.unobserve(shoppingInfoRef.current!);
      },
      { threshold: 1 }
    );
    observer.observe(shoppingInfoRef.current!);

    const observer2 = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setPackageShow(entry.isIntersecting);

        if (entry.isIntersecting) observer2.unobserve(packageInfoRef.current!);
      },
      { threshold: 1 }
    );
    observer2.observe(packageInfoRef.current!);
  }, []);

  return (
    <>
      <section className="videoSection">
        <div className="info">
          <h1>fast, safe, social payments</h1>
          <p>
            Pay. Get paid. Shop. Share. Join tens of millions of people on
            Paypal.
          </p>
        </div>
        <div className="gif">
          <img src="/paypal_sm.gif" alt="logo" />
        </div>
        <div className="video">
          <video src={paypalVideo} autoPlay muted playsInline></video>
        </div>
        <div className="video__footer">
          <h1>
            Looking for PayPal Business Solutions? Whether you are freelancer or
            a business, we are here to support you.
          </h1>
          <CommonBtn btnType="login" title="paypal business" />
        </div>
      </section>
      <main>
        <div className="white_space" ref={shoppingInfoRef} />

        <div
          className={`shopping_section ${
            shoppingShow && `shopping_section_show`
          }`}
        >
          <div className={`shopping_info`}>
            <h1>The world is your shopping {"\n"}mall</h1>
            <p>
              From big brands to little boutiques, you can shop safely at
              millions of online stores with PayPal.
            </p>
            <ShoppingBtn title="Shop now" />
          </div>
          <img src="/shopping.png" alt="shopping-img" />
        </div>

        <div className="white_space" ref={packageInfoRef} />

        <div
          className={`shopping_package_section ${
            packageShow && `shopping_section_show`
          }`}
        >
          <img src="/shopping_dress.gif" alt="shopping-img" />
          <div className={`shopping_package_info`}>
            <h1>Returning a purchase? Get shipping refunded.</h1>
            <p>
              When you return a purchase you bought with PayPal, you can get
              your return shipping costs*** refunded.
            </p>
            <ShoppingBtn title="Shop now" />
          </div>
        </div>
      </main>
    </>
  );
};

export default VideoComp;
