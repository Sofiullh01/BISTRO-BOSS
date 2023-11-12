import { useEffect, useState } from "react";
import Section from "../../../Component/Section/Section";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const PopulerMenu = () => {
    const [menus,setMenu] = useState([]);
    useEffect(() => {
        fetch('/menu.json') 
          .then(res => res.json())
          .then(data => {
            const popularItems = data.filter(item => item.category === 'popular'); 
            console.log(popularItems);
            setMenu(popularItems);
          })
          .catch(error => {
            console.error('Error fetching menu data:', error);
          });
      }, []);
      
    return (
        <section className="my-20">
            <Section 
            heading={'FROM OUR MENU'}
            subHeading={'---Check it out---'}
            >
            </Section>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menus.map(Items => <MenuItems
                    items={Items}
                    key={Items._id}></MenuItems>)
                }
            </div>
            <div className=" my-6 flex justify-center items-center">
            <button className=" py-2 px-2 hover:bg-[#FBA407] hover:text-white font-medium duration-1000 rounded-md border-b-4 outline-none">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopulerMenu;