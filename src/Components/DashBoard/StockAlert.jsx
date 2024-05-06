import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const StockAlert = () => {
  const { products } = useContext(AppContext);
  const lowStockProducts = products.filter(
    (product) => product.stock_quantity < 25
  );
  return (
    <div className="  px-4">
      <h3 className="font-bold font-popps text-secondary text-base text-center pb-3 ">
        Stock Alert Quantity
      </h3>
      <div className="overflow-x-auto">
        <table className=" border-2 ml-10 whitespace-nowrap">
          <thead>
            <tr className="bg-graphclr ">
              <th className="px-6 py-3 text-left text-sm font-semibold text-litwhite uppercase tracking-wider">
                S.NO
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-litwhite uppercase tracking-wider">
                Stock Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-litwhite uppercase tracking-wider">
                Stock Quantity
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {lowStockProducts.map((stock, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-2 text-center whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{stock.name}</td>
                <td className="px-4 py-2  text-center whitespace-nowrap">
                  {stock.stock_quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockAlert;
