import Navbar from "./NavbarContainer";
import ImageSlider from "./ImageSlider";
import HomePageContainer from "../HomePageProduct/HomePageContainer";
import FooterContainer from "../Layout/Footer/FooterContainer";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid px-0">
        <ImageSlider />
        <HomePageContainer />
        <FooterContainer />
      </div>
    </>
  );
};

export default LandingPage;
