import { Helmet } from "react-helmet-async";
import CallUs from "../../Shared/CallUs/CallUs";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Cetagory from "../Cetagory/Cetagory";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import ShouldTry from "../ShouldTry/ShouldTry";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Home</title>
      </Helmet>
      <Banner />
      <Cetagory />
      <BistroBoss />
      <PopulerMenu />
      <CallUs />
      <ShouldTry />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
