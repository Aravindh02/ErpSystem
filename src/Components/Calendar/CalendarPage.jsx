import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { AppContext } from "../Context/AppContext";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalData, setModalData] = useState(null);
  const { orders } = useContext(AppContext);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const selectedDateString = formatDate(date);
    const selectedOrders = orders.filter(
      (order) => order.deliveryDate === selectedDateString
    );
    setModalData(selectedOrders.length > 0 ? selectedOrders : null);
  };
  const formatDate = (date) => {
    return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${(
      "0" + date.getDate()
    ).slice(-2)}`;
  };
  const closeModal = () => {
    setModalData(null);
    setSelectedDate(null);
  };
  const highlightDate = (date) => {
    const formattedDate = formatDate(date);
    return orders.some((order) => order.deliveryDate === formattedDate);
  };
  const tileContent = ({ date }) => {
    const formattedDate = formatDate(date);
    const ordersOnDate = orders.filter(
      (order) => order.deliveryDate === formattedDate
    );
    const orderIds = ordersOnDate.map((order) => order.orderId).join(", ");
    return (
      <div className="text-center">
        {highlightDate(date) && (
          <>
            {orderIds && (
              <p className="bg-gray-500 text-white w-10 h-9 flex items-center justify-center mx-auto ">
                {orderIds}
              </p>
            )}
          </>
        )}
      </div>
    );
  };
  return (
    <div className="flex justify-center items-center min-h-full mt-16 ">
      <Calendar
        onChange={handleDateSelect}
        value={selectedDate}
        tileContent={tileContent}
        dayClassName={(date) =>
          highlightDate(date) ? "bg-blue-500 text-white" : null
        }
      />
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
          <div className="bg-white p-4 rounded-lg w-80 ">
            <h2 className="text-lg font-bold mb-4">Delivery Details</h2>
            {modalData.map((order) => (
              <div key={order.orderId} className="mb-4">
                <p>
                  <span className="font-bold">Order ID:</span> {order.orderId}
                </p>
                <p>
                  <span className="font-bold">Customer Name:</span>{" "}
                  {order.customerName}
                </p>
                <p>
                  <span className="font-bold">Delivery Address:</span>{" "}
                  {order.deliveryAddress}
                </p>
              </div>
            ))}
            <button
              className="w-full py-2 mt-4 text-white bg-black font-bold rounded-lg hover:scale-105 hover:ease-in-out delay-200 focus:outline-none"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CalendarPage;
