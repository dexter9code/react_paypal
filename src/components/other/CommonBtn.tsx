import styles from "./commonBtn.module.scss";

type Btn = "login" | "signup";

type CommonBtnProps = {
  title: string;
  btnType: Btn;
};

const CommonBtn = ({ title, btnType }: CommonBtnProps) => {
  return (
    <div
      className={`${styles.btn} ${
        btnType === "login" ? styles.login : styles.signup
      }`}
    >
      <h3>{title}</h3>
    </div>
  );
};

export default CommonBtn;
