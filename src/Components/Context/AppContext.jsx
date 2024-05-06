import React, { createContext, useState } from "react";
import productsData from "../ProductPage/ProductData.js";
import ordersData from "../OrderPage/OrderData.js";

export const AppContext = createContext([]);

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [orders, setOrders] = useState(ordersData);

  return (
    <AppContext.Provider value={{ products, setProducts, orders, setOrders }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
