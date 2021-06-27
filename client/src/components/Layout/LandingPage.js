import Navbar from "./NavbarContainer";
import ImageSlider from "./ImageSlider";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid px-0">
        <ImageSlider />
      </div>
    </>
  );
};

export default LandingPage;
