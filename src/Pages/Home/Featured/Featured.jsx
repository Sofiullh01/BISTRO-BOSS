import { useEffect, useState } from "react";
import featured from "../../../assets/home/featured.jpg";
import Section from "../../../Component/Section/Section";
import './feature.css'

const Featured = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);

  }, []);
  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours %= 12;
    hours = hours || 12; // Handle midnight
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    const strTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    return strTime;
  };
  return (
    <div className="featured-items bg-fixed text-white">
      <div className="bg-black bg-opacity-40 pt-8 ">
      <Section subHeading={"---Check it out---"} heading={"FROM OUR MENU"} />
      <div className="md:flex gap-5 justify-center items-center py-20 px-16">
        <div>
          <img src={featured} alt="Featured Item" />
        </div>
        <div>
          <p>{formatAMPM(currentDate)}</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className=" py-2 px-2 hover:bg-[#FBA407] hover:text-white font-medium duration-1000 rounded-md border-b-4 outline-none">Read More</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Featured;
