import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import validateForm from "./FormValidation";

const AddProduct = () => {
  let history = useNavigate();
  const { products, setProducts } = useContext(AppContext);
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    price: "",
    stockQuantity: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length === 0) {
      createProduct();
      setFormData({
        productName: "",
        category: "",
        price: "",
        stockQuantity: "",
      });
      history("/Product");
    } else {
      setErrors(formErrors);
    }
  };

  const createProduct = () => {
    const ids = uuid();
    let uni = ids.slice(0, 8);
    setProducts([
      ...products,
      {
        id: uni,
        name: formData.productName,
        category: formData.category,
        price: formData.price,
        stock_quantity: formData.stockQuantity,
      },
    ]);
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-10 my-2  bg-gray-200 rounded-lg border-2 shadow-2xl"
      >
        <div className="mb-4">
          <label className="block mb-2" htmlFor="productName">
            Product Name:
          </label>
          <input
            type="text"
            id="productName"
            value={formData.productName}
            onChange={(e) =>
              setFormData({ ...formData, productName: e.target.value })
            }
            className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:border-gray-400"
            required
            autoComplete="off"
          />
          {errors.productName && (
            <span className="text-red-500">{errors.productName}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="category">
            Category:
          </label>

          <select
            id="status"
            name="status"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="mt-1 mb-4 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-gray-400 focus:border-gray-400 "
          >
            <option value="">Select Category</option>
            <option value="Cloths">Cloths</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Bags">Bags</option>
            <option value="Accessories">Accessories</option>
            <option value="Footwear">Footwear</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
          </select>
          {errors.category && (
            <span className="text-red-500 text-xs">{errors.category}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="price">
            Price:
          </label>
          <input
            type="text"
            id="price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:border-gray-400"
            required
            autoComplete="off"
          />
          {errors.price && (
            <span className="text-red-500 text-sm">{errors.price}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="stockQuantity">
            Stock Quantity:
          </label>
          <input
            type="text"
            id="stockQuantity"
            value={formData.stockQuantity}
            onChange={(e) =>
              setFormData({ ...formData, stockQuantity: e.target.value })
            }
            className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:border-gray-400"
            required
            autoComplete="off"
          />
          {errors.stockQuantity && (
            <span className="text-red-500 text-sm">{errors.stockQuantity}</span>
          )}
        </div>
        <button
          type="submit"
          className="ml-28 px-6 py-3 text-white bg-black font-bold rounded-xl hover:scale-105 hover:ease-in-out delay-200 focus:outline-none"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
