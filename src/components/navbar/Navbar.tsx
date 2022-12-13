import styles from "./navbar.module.scss";
import logo from "/logo_paypal.png";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import NavMenu from "./NavMenu";
import { useDispatch, useSelector } from "react-redux/es/exports";

import { activeShown, closeShown } from "../../features/NavbarSlice";
import { BUSINESS, INDIVIAL, INFO } from "../../data/menu";
import CommonBtn from "../other/CommonBtn";
import { RootState } from "../../store/store";

const Navbar: React.FC = () => {
  const shownDown = useSelector((state: RootState) => state.navbar.isShown);
  const infoDown = useSelector(
    (state: RootState) => state.navbar.isUsefulInfoShown
  );
  const businessDown = useSelector(
    (state: RootState) => state.navbar.isBusinessShown
  );
  const dispatch = useDispatch();

  return (
    <>
      <header className={styles.nav}>
        <div className={styles.logo}>
          <img src={logo} alt="paypal logo" />
        </div>
        <nav className={styles.menu}>
          <div
            className={styles.menu__contents}
            onMouseEnter={() => dispatch(activeShown("shown"))}
            onMouseLeave={() => dispatch(closeShown("shown"))}
          >
            <h3>Indivial</h3>
            {shownDown ? <FaChevronDown /> : <FaChevronUp />}
          </div>
          <div
            className={styles.menu__contents}
            onMouseEnter={() => dispatch(activeShown("business"))}
            onMouseLeave={() => dispatch(closeShown("business"))}
          >
            <h3>Business</h3>
            {businessDown ? <FaChevronDown /> : <FaChevronUp />}
          </div>
          <div
            className={styles.menu__contents}
            onMouseEnter={() => dispatch(activeShown("info"))}
            onMouseLeave={() => dispatch(closeShown("info"))}
          >
            <h3>Userful Info</h3>
            {infoDown ? <FaChevronDown /> : <FaChevronUp />}
          </div>
        </nav>
        <div className={styles.btn__container}>
          <CommonBtn title="Login" btnType="login" />
          <CommonBtn title="Sign Up" btnType="signup" />
        </div>
      </header>
      {shownDown && (
        <div className={styles.test}>
          <NavMenu menuTitles={INDIVIAL} type={"shown"} />
        </div>
      )}
      {businessDown && <NavMenu menuTitles={BUSINESS} type={"business"} />}
      {infoDown && <NavMenu menuTitles={INFO} type={"info"} />}
    </>
  );
};

export default Navbar;
