import "./summaryCard.scss";
import visa from "../../../public/visa.png";
import master from "../../../public/master-card.png";

type SummaryCardProps = {
  type: string;
  number: string;
  cardType: string;
};

const SummaryCard = ({ cardType, number, type }: SummaryCardProps) => {
  const cardNumber = number.slice(-4);

  return (
    <div className="visa_root_container">
      <div className="img_container">
        <img src={type === "visa" ? visa : master} alt="card-img" />
      </div>
      <div className="visa_info_container">
        <h2>{type}</h2>
        <p>
          {cardType} ●●●{cardNumber}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
