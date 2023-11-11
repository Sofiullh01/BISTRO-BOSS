import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Cetagory from "../Cetagory/Cetagory";
import PopulerMenu from "../PopulerMenu/PopulerMenu";


const Home = () => {
    return (
        <div className="my-8">
            <Banner/>
            <Cetagory/>
            <BistroBoss/>
            <PopulerMenu/>
        </div>
    );
};

export default Home;