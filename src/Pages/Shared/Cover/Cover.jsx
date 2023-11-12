import PropTypes from "prop-types";
import { Parallax } from "react-parallax";
const Cover = ({ backgImg, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={backgImg}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero md:h-[500px]"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" w-[800px] bg-opacity-50 rounded-md bg-black py-12 px-20 ">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{subTitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

Cover.propTypes = {
  backgImg: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
export default Cover;
