import Carousel from "../components/carousel/Carousel";
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
    </>
  );
};

export default HomePage;
