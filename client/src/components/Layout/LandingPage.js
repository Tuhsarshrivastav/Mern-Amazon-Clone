import Navbar from "./NavbarContainer";
import ImageSlider from "./ImageSlider";
import HomePageContainer from "../HomePageProduct/HomePageContainer";
import FooterContainer from "../Layout/Footer/FooterContainer";
const LandingPage = (props) => {
  return (
    <>
      <Navbar  {...props}/>
      <div className="container-fluid px-0">
        <ImageSlider {...props} />
        <HomePageContainer {...props} />
        <FooterContainer {...props} />
      </div>
    </>
  );
};

export default LandingPage;
