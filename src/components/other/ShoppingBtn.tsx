import "./shoppingbtn.scss";

type ShoppingBtnProps = {
  title: string;
};

const ShoppingBtn = ({ title }: ShoppingBtnProps) => {
  return (
    <div className="custom-btn btn-15">
      <h3>{title}</h3>
    </div>
  );
};

export default ShoppingBtn;
