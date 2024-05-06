import React, { useState, useEffect } from "react";

const UpdateOrderStatusModal = ({ isOpen, onClose, order, onUpdateStatus }) => {
  const [newStatus, setNewStatus] = useState("");

  useEffect(() => {
    if (isOpen) {
      setNewStatus(order.orderStatus || "");
    }
  }, [isOpen, order]);

  const handleUpdateStatus = () => {
    onUpdateStatus(order.orderId, newStatus);
    onClose();
  };

  const handleChange = (event) => {
    setNewStatus(event.target.value);
  };

  const handleCloseModal = () => {
    setNewStatus("");
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div
            className="fixed inset-0 bg-slate-800 bg-opacity-15 transition-opacity"
            onClick={handleCloseModal}
          ></div>
          <div className="bg-white rounded-lg p-8 z-50 w-1/2">
            <div className="flex justify-between">
              <h1 className="font-bold text-lg">Update Order Status</h1>
              <button className="w-10 h-10" onClick={handleCloseModal}>
                {" "}
                &times;{" "}
              </button>
            </div>
            <div className="mt-4">
              <label htmlFor="status" className="block">
                New Status:
              </label>
              <select
                id="status"
                name="status"
                value={newStatus}
                onChange={handleChange}
                className="mt-1 mb-4 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-black focus:border-black"
              >
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
              <button
                onClick={handleUpdateStatus}
                disabled={!newStatus}
                className=" px-6 py-3 text-white bg-black font-bold rounded-xl hover:scale-105 hover:ease-in-out delay-200 focus:outline-none"
              >
                Update Status
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default UpdateOrderStatusModal;
