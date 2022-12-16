import "./spaceBtn.scss";

type CompProps = {
  title: String;
};

const SpaceBtn: React.FC<CompProps> = ({ title }) => {
  return (
    <div className="space_container">
      <h1>{title}</h1>
    </div>
  );
};

export default SpaceBtn;
