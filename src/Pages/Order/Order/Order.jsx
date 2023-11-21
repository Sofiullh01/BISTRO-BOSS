import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import orderBanner from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useManu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categorise = ['salad', 'pizza', 'soup','dessert','drinks' ];
  const {category} = useParams();
  const initialIndex = categorise.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menus] = useMenu();
    const dessert = menus.filter(items=> items.category === 'dessert')
    const drinks = menus.filter(items=> items.category === 'drinks')
    const pizza = menus.filter(items=> items.category === 'pizza')
    const soup = menus.filter(items=> items.category === 'soup')
    const salad = menus.filter(items=> items.category === 'salad')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Order</title>
      </Helmet>
      <Cover
        backgImg={orderBanner}
        title={" OUR SHOP"}
        subTitle={" Would you like to try a dish?"}
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab item={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab item={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab item={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab item={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab item={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
