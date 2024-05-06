import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", sales: 400, price: 3000 },
  { name: "Feb", sales: 650 },
  { name: "Mar", sales: 940 },
  { name: "Apr", sales: 1880 },
  { name: "May", sales: 1540 },
  { name: "Jun", sales: 2930 },
];
const LineGraph = () => {
  return (
    <ResponsiveContainer width={450} height={350}>
       <div className="  flex-col justify-center items-center">
      <h1 className="min-w-20 text-center font-popps text-secondary font-bold ml-12 text-base">
        Monthly Sales Performance
      </h1>
      
      <LineChart
        width={390}
        height={320}
        data={data}
        margin={{ top: 15, right: 5, bottom: 5, left: 26 }}
        
      >
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="price">
          <Label
            className="font-bold"
            value="Sales in units "
            angle={-90}
            position="insideLeft"
            style={{ textAnchor: "middle" }}
          />
        </YAxis>
        <Tooltip />
      </LineChart>
    </div>
    </ResponsiveContainer>
   
  );
};

export default LineGraph;
