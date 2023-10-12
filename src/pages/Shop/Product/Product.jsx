import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useMenu from "../../../hooks/useMenu";
import Container from "../../Shared/Container";
import OrderTab from "./OrderTab";

const Product = () => {
  const [menu] = useMenu();
  const [tabIndex, setTabIndex] = useState(0);

  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");

  const tabStyle =
    "tab border-b-2 border-transparent font-medium text-neutral uppercase hover:border-secondary";

  return (
    <Container>
      <div className="py-20">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className={"tabs justify-center gap-3"}>
            <Tab className={tabStyle}>All</Tab>
            <Tab className={tabStyle}>Dessert</Tab>
            <Tab className={tabStyle}>Pizza</Tab>
            <Tab className={tabStyle}>Salad</Tab>
            <Tab className={tabStyle}>Soup</Tab>
            <Tab className={tabStyle}>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={menu} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </Container>
  );
};

export default Product;
