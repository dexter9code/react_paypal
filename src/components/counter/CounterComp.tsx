import { addTimer } from "../../features/TimerSlice";
import { RootState } from "../../store/store";
import SpaceBtn from "../other/SpaceBtn";
import Tab from "../other/Tab";
import CommonBtn from "./../other/CommonBtn";
import "./counterComp.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CounterComp = () => {
  const [count, setCount] = useState(305005010);
  const dispatch = useDispatch();
  const timer = useSelector((state: RootState) => state.timer.numbers);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevValue) => (prevValue += 1));
    }, 2500);

    return () => clearInterval(timer);
  }, []);
  let noArr: string[];

  useEffect(() => {
    noArr = count.toString().split("");
    dispatch(addTimer(noArr));
  }, [count]);

  return (
    <div className="root_counter">
      <div className="counter_container">
        <div className="counter_title">
          <h1>
            Join the global community of PayPal users who are shopping and
            receiving payments securely every day.
          </h1>
        </div>
        <SpaceBtn title={`sign up now`} />
        <div className="timer">
          {timer?.map((item, index) => {
            return (
              <div className="single_number" key={index}>
                <h3>{item}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className="counter_info_counter">
        <h4>Terms & Conditions:</h4>
        <p>
          * Buyer Protection is available on eligible purchases only. 180 day
          time limit and other terms apply.
        </p>
        <p>** Subject to issuer’s reward programme terms and conditions.</p>
      </div>
      <Tab />
    </div>
  );
};

export default CounterComp;
