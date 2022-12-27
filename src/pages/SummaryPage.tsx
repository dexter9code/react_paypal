import SummaryFooter from "../components/footer/SummaryFooter";
import SummaryNavbar from "../components/navbar/SummarNavbar";
import Summary from "../components/summary/Summary";

const SummaryPage = () => {
  return (
    <>
      <SummaryNavbar />
      <Summary />
      <SummaryFooter />
    </>
  );
};

export default SummaryPage;
