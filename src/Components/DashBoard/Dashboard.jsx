import React, { useContext } from "react";
import DetailedBox from "./DetailedBox";
import { AppContext } from "../Context/AppContext";
import LineGraph from "./LineGraph";
import BarGraph from "./BarGraph";
import StockAlert from "./StockAlert";

const Dashboard = () => {
  const title = "Total products";
  const title2 = "Total Orders";
  const title3 = "Order Per Month";
  const title4 = "Sales per Month";
  const ordersPerMonth = "804";
  const salesPerMonth = "9795";

  const { orders, products } = useContext(AppContext);
  const totalOrders = orders.map((order) => {
    return order;
  });
  const totalProduct = products.map((product) => {
    return product;
  });
  return (
    <>
      <div className="md:flex justify-around gap-x-36 lg:gap-x-14 gap-y-2">
        <div className="container px-8 w-1/2 grid grid-cols-2 gap-x-56 lg:gap-x-14 gap-y-2">
          <DetailedBox title={title} value={totalProduct.length} />
          <DetailedBox title={title2} value={totalOrders.length} />
          <DetailedBox title={title3} value={ordersPerMonth} />
          <DetailedBox title={title4} value={salesPerMonth} />
        </div>
        <BarGraph />
      </div>
      <div className="md:flex justify-around lg:gap-x-12 gap-y-2">
        <LineGraph />
        <StockAlert />
      </div>
    </>
  );
};
export default Dashboard;
