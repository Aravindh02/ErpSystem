import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const { products, setProducts } = useContext(AppContext);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    toast.dark("Product Removed");
  };

  return (
    <div>
      <div className="p-5 h-full bg-gray-100">
        <div className="flex justify-between">
          <h1 className="text-xl mt-3 font-popps text-secondary">Product Management</h1>
          <Link
            to="/AddProduct"
            className="border-spacing-1 py-3 px-4 mb-4 bg-primary font-popps text-white rounded-3xl font-bold"
          >
            + Add Product
          </Link>
        </div>
        <div className="overflow-auto rounded-lg shadow md:block">
          {products.length === 0 ? (
            <p className="text-center text-gray-500 mt-4">
              You have no Products.You can start selling by clicking Add
              Products.
            </p>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="p-3 pl-10 w-32 text-sm font-semibold tracking-wide text-left">
                    S.NO
                  </th>
                  <th className="p-3 pl-8 w-64 text-sm font-semibold tracking-wide text-left">
                    Name
                  </th>
                  <th className="p-3 w-60 text-sm font-semibold tracking-wide text-left">
                    Categories
                  </th>
                  <th className="p-3 w-32 text-sm font-semibold tracking-wide text-center">
                    Price
                  </th>
                  <th className="p-3 w-60 text-sm font-semibold tracking-wide text-center">
                    Quantity
                  </th>
                  <th className="p-3 w-56 text-sm font-semibold tracking-wide text-center">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 text-center">
                {products.map((product, index) => (
                  <tr key={index} className="bg-white">
                    <td className="px-4 py-2 text-center whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="p-3 pl-8 text-sm text-gray-700 whitespace-nowrap text-left">
                      {product.name}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-left">
                      {product.category}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-center">
                      {product.price}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-center">
                      {product.stock_quantity}
                    </td>
                    <td>
                      <Link to={`/EditProduct/${product.id}`}>
                        <button>
                          <FontAwesomeIcon
                            icon={faPen}
                            size="lg"
                            className="px-6"
                          />
                        </button>
                      </Link>
                      <button onClick={() => handleDelete(product.id)}>
                        <FontAwesomeIcon icon={faTrash} size="lg" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Product;
