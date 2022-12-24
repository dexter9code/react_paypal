import "./summaryBtn.scss";

type SummaryBtnProps = {
  title: string;
};

const SummaryBtn = ({ title }: SummaryBtnProps) => {
  return (
    <div className="summary_btn_container">
      <h3 className="txt">{title}</h3>
    </div>
  );
};

export default SummaryBtn;
