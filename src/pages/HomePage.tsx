import Carousel from "../components/carousel/Carousel";
import CounterComp from "../components/counter/CounterComp";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Tab from "../components/other/Tab";
import VideoComp from "../components/videoSection/VideoComp";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <VideoComp />
      <Carousel />
      <Tab />
      <CounterComp />
      <Footer />
    </>
  );
};

export default HomePage;
