import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import PIZZAImg from '../../../assets/menu/pizza-bg.jpg'
import SALADSImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useManu";
import Section from "../../../Component/Section/Section";
import MenuCetagory from "./MenuCetagory/MenuCetagory";

const Menu = () => {
  const [menus] = useMenu();
  const dessert = menus.filter(items=> items.category === 'dessert')
  const drinks = menus.filter(items=> items.category === 'drinks')
  const pizza = menus.filter(items=> items.category === 'pizza')
  const soup = menus.filter(items=> items.category === 'soup')
  const offered = menus.filter(items=> items.category === 'offered')
  const salad = menus.filter(items=> items.category === 'salad')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover backgImg={menuImg} title={'OUR MENU'} subTitle={'Would you like to try a dish?'}></Cover>
      <Section
      subHeading={"---Don't miss---"}
      heading={"TODAY'S OFFER"}
      ></Section>
      <MenuCetagory items={offered} btnValue={'ORDER YOUR FAVOURITE FOOD'}
      ></MenuCetagory>
      {/* DESSERTS MENU */}
      <MenuCetagory items={dessert} backgImg={dessertImg} title={'DESSERTS'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} btnValue={'ORDER YOUR FAVOURITE FOOD'}></MenuCetagory>
      {/* PIZZA MENU */}
      <MenuCetagory items={pizza} backgImg={PIZZAImg} title={'PIZZA'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} btnValue={'ORDER YOUR FAVOURITE FOOD'}></MenuCetagory>
      {/* SALADS MENU */}
      <MenuCetagory items={salad} backgImg={SALADSImg} title={'SALADS'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} btnValue={'ORDER YOUR FAVOURITE FOOD'}></MenuCetagory>
      {/* SOUPS MENU */}
      <MenuCetagory items={soup} backgImg={soupImg} title={'SALADS'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} btnValue={'ORDER YOUR FAVOURITE FOOD'}></MenuCetagory>
    </div>
  );
};

export default Menu;
