import Navbar from "./NavbarContainer";
import ImageSlider from "./ImageSlider";
import HomePageContainer from "../HomePageProduct/HomePageContainer";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid px-0">
        <ImageSlider />
      </div>
      <HomePageContainer/>
    </>
  );
};

export default LandingPage;
