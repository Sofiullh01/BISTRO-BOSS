import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItems from "../../../Shared/MenuItems/MenuItems";
import PropTypes from "prop-types";
const MenuCetagory = ({ items,backgImg,title,subTitle,btnValue}) => {
  return (
    <div className="mt-12">
      {title && <Cover
        backgImg={backgImg}
        title={title}
        subTitle={subTitle}
      ></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items?.map((Items) => (
          <MenuItems items={Items} key={Items._id}></MenuItems>
        ))}
      </div>
      {btnValue && <Link to={`/order/${title}`}>
        <div className=" my-6 flex justify-center items-center">
            <button className=" py-2 px-4 hover:bg-[#FBA407] hover:text-white font-medium duration-1000 rounded-md border-b-4 outline-none">{btnValue}</button>
            </div>
      </Link>}
    </div>
  );
};

MenuCetagory.propTypes = {
  items: PropTypes.array,
  backgImg: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  btnValue : PropTypes.string,
};
export default MenuCetagory;
