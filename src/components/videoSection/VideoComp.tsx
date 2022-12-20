import "./videoComp.scss";
import paypalVideo from "../../assets/paypal_vid_sm.mp4";
import CommonBtn from "../other/CommonBtn";
import { useRef, useEffect, useState } from "react";
import ShoppingBtn from "../other/ShoppingBtn";

const VideoComp = () => {
  const shoppingInfoRef = useRef<HTMLDivElement>(null);
  const packageInfoRef = useRef<HTMLDivElement>(null);
  const payInfoRef = useRef<HTMLDivElement>(null);
  const shopInfoRef = useRef<HTMLDivElement>(null);
  const [shoppingShow, setShoppingShow] = useState<boolean>();
  const [packageShow, setPackageShow] = useState<boolean>();
  const [payShow, setPayShow] = useState<boolean>();
  const [shopShow, setShopShow] = useState<boolean>();

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

    const observer3 = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setPayShow(entry.isIntersecting);

        if (entry.isIntersecting) observer3.unobserve(payInfoRef.current!);
      },
      { threshold: 1 }
    );
    observer3.observe(payInfoRef.current!);

    const observer4 = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShopShow(entry.isIntersecting);

        if (entry.isIntersecting) observer4.unobserve(shopInfoRef.current!);
      },
      { threshold: 1 }
    );
    observer4.observe(shopInfoRef.current!);
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
        {/* section1------------------------------------------ */}
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
        <div className="white_space" ref={shoppingInfoRef} />

        {/* section2------------------------------------------ */}
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
            <ShoppingBtn title="learn more" />
          </div>
        </div>
        <div className="white_space" ref={packageInfoRef} />

        {/* section3------------------------------------------ */}
        <div className="white_space" ref={payInfoRef} />
        <div
          className={`shopping_pay_section ${
            payShow && `shopping_section_show`
          }`}
        >
          <div className={`shopping_pay_info`}>
            <h1>Pay it the way you want</h1>
            <p>
              Link all your credit and debit cards and choose which one to use
              at checkout. Shopping online has never been this easy.
            </p>
            <ShoppingBtn title="Link your card" />
          </div>
          <img src="/pay-v2.gif" alt="shopping-img" />
        </div>
        <div className="white_space" ref={payInfoRef} />

        {/* section4------------------------------------------ */}
        <div className="white_space" ref={shopInfoRef} />
        <div
          className={`shopping_online_section ${
            shopShow && `shopping_section_show`
          }`}
        >
          <img src="/confidence.png" alt="shopping-img" />
          <div className={`shopping_online_info`}>
            <h1>Shop online with confidence </h1>
            <p>
              Stay more secure when shopping online – with 24/7 fraud
              monitoring, Buyer Protection*, and refund on return shipping
              costs*** on us. Terms apply.
            </p>
            <ShoppingBtn title="find out more" />
          </div>
        </div>
        <div className="white_space" ref={shopInfoRef} />
      </main>
    </>
  );
};

export default VideoComp;
