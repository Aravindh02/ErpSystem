// Order.jsx
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../Context/AppContext";
import ViewOrderDetails from "./ViewOrderDetails";
import UpdateOrderStatusModal from "./UpdateOrderStatusModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Order = () => {
  const { orders, setOrders } = useContext(AppContext);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalMode, setModalMode] = useState("view");

  const handleViewOrder = (orderId) => {
    const order = orders.find((order) => order.orderId === orderId);
    setSelectedOrder(order);
    setModalMode("view");
  };

  const handleEditOrder = (orderId) => {
    const order = orders.find((order) => order.orderId === orderId);
    setSelectedOrder(order);
    setModalMode("edit");
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    const orderIndex = orders.findIndex((order) => order.orderId === orderId);
    const updatedOrders = [...orders];
    updatedOrders[orderIndex].orderStatus = newStatus;
    setOrders(updatedOrders);
    handleCloseModal();
    toast.success("Status updated");
  };
  const handleDeleteOrder = (id) => {
    const updateItem = orders.filter((order) => order.orderId !== id);
    setOrders(updateItem);
    toast.dark("Order removed");
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-600";
      case "Shipped":
        return "bg-red-100 text-red-400";
      case "Processing":
        return "bg-red-500 text-white";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="p-5 h-full bg-gray-100">
        <h1 className="text-xl mb-2">Order Management</h1>
        <div className="overflow-auto rounded-lg shadow md:block">
          <table className="w-full ">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="p-3 pl-8 w-60text-sm font-semibold tracking-wide text-left">
                  Order ID
                </th>
                <th className="p-3 w-72 text-sm font-semibold tracking-wide text-left">
                  Customer Name
                </th>
                <th className="p-3 w-60 text-sm font-semibold tracking-wide text-left">
                  Order Date
                </th>
                <th className="p-3 w-60 text-sm font-semibold tracking-wide text-center ">
                  Status
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-center">
              {orders.map((item, key) => (
                <tr className="bg-white " key={key}>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-left pl-8">
                    <a
                      href="#"
                      className="font-bold text-blue-500 hover:underline"
                    >
                      {item.orderId}
                    </a>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-left">
                    {item.customerName}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-left">
                    {item.orderDate}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-center">
                    <span
                      className={`p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50 ${getStatusColor(
                        item.orderStatus
                      )}`}
                    >
                      {item.orderStatus}
                    </span>
                  </td>
                  <td className="p-2">
                    <FontAwesomeIcon
                      icon={faEye}
                      size="lg"
                      className="px-2"
                      onClick={() => handleViewOrder(item.orderId)}
                    />
                    <FontAwesomeIcon
                      icon={faPen}
                      size="lg"
                      className="px-2"
                      onClick={() => handleEditOrder(item.orderId)}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="lg"
                      onClick={() => handleDeleteOrder(item.orderId)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ViewOrderDetails
        isOpen={selectedOrder !== null && modalMode === "view"}
        onClose={handleCloseModal}
        order={selectedOrder}
      />
      <UpdateOrderStatusModal
        isOpen={selectedOrder !== null && modalMode === "edit"}
        onClose={handleCloseModal}
        order={selectedOrder}
        onUpdateStatus={handleUpdateOrderStatus}
      />
      <ToastContainer />
    </>
  );
};

export default Order;
