import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Container from "../../Shared/Container";
import OrderTab from "./OrderTab";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const dessert = products.filter((item) => item.category === "dessert");
  const pizza = products.filter((item) => item.category === "pizza");
  const soup = products.filter((item) => item.category === "soup");
  const salad = products.filter((item) => item.category === "salad");
  const drinks = products.filter((item) => item.category === "drinks");

  return (
    <Container>
      <div className="py-20">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className={"tabs"}>
            <Tab className={"tab tab-bordered"}>All</Tab>
            <Tab className={"tab tab-bordered"}>Dessert</Tab>
            <Tab className={"tab tab-bordered"}>Pizza</Tab>
            <Tab className={"tab tab-bordered"}>Salad</Tab>
            <Tab className={"tab tab-bordered"}>Soup</Tab>
            <Tab className={"tab tab-bordered"}>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={products} />
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
