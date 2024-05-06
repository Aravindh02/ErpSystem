import { useState, useEffect } from "react";

const ViewOrderDetails = ({ isOpen, onClose, order }) => {
  const [selectedCard, setSelectedCard] = useState("shipping");
  useEffect(() => {
    if (isOpen) {
      setSelectedCard("shipping");
    }
  }, [isOpen]);

  const handleClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto ">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-slate-300 bg-opacity-15 transition-opacity"></div>
            <div className="bg-white rounded-lg shadow-2xl p-4 sm:p-8 sm:w-1/2 lg:w-1/2 z-50">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-bold">Order Details</h1>
                <button onClick={onClose}>&times;</button>
              </div>
              <div className="mt-4">
                <div className="flex justify-around mb-4">
                  <button
                    onClick={() => handleClick("shipping")}
                    className={`px-4 py-2 border border-black rounded-2xl shadow-lg ${
                      selectedCard === "shipping"
                        ? "bg-black text-white scale-110 translate-y-1"
                        : "bg-gray-400 text-white font-medium border-gray-500"
                    }`}
                  >
                    Shipping details
                  </button>
                  <button
                    onClick={() => handleClick("products")}
                    className={`px-4 py-2 border  border-black rounded-2xl shadow-lg ${
                      selectedCard === "products"
                        ? "bg-black text-white"
                        : "bg-gray-400 text-white font-medium border-gray-500"
                    }`}
                  >
                    Ordered Product
                  </button>
                </div>
                <form className="block">
                  {selectedCard === "shipping" && (
                    <div className="p-2 text-center">
                      <ul className="p-2">
                        <span className="font-bold pr-4 text-right">
                          OrderID:
                        </span>{" "}
                        {order.orderId}
                      </ul>
                      <ul className="p-2">
                        <span className="font-bold pr-4 text-right">
                          Customer Name:
                        </span>{" "}
                        {order.customerName}
                      </ul>
                      <ul className="p-2">
                        <span className="font-bold pr-4 text-right">
                          Order Date:
                        </span>{" "}
                        {order.orderDate}
                      </ul>
                      <ul className="p-2">
                        <span className="font-bold pr-4 text-right">
                          Order Status:
                        </span>{" "}
                        {order.orderStatus}
                      </ul>
                      <ul className="p-2">
                        <span className="font-bold pr-4 text-right">
                          Delivery Date:
                        </span>{" "}
                        {order.deliveryDate}
                      </ul>
                      <ul className="p-2">
                        <span className="font-bold pr-4 ">
                          Delivery Address:
                        </span>{" "}
                        {order.deliveryAddress}
                      </ul>
                    </div>
                  )}
                  {selectedCard === "products" && (
                    <div>
                      <table className="w-full">
                        <thead>
                          <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.products.map((product, index) => (
                            <tr key={index}>
                              <td className="border px-4 py-2">{product.id}</td>
                              <td className="border px-4 py-2">
                                {product.name}
                              </td>
                              <td className="border px-4 py-2">
                                {product.category}
                              </td>
                              <td className="border px-4 py-2">
                                {product.price}
                              </td>
                              <td className="border px-4 py-2">
                                {product.quantity}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewOrderDetails;
