import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import { useParams, useNavigate } from "react-router-dom";
import validateForm from "./FormValidation";

const EditProduct = () => {
  const { id } = useParams();
  const { products, setProducts } = useContext(AppContext);
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    price: "",
    stockQuantity: "",
  });
  const [errors, setErrors] = useState({});
  const history = useNavigate();

  useEffect(() => {
    const product = products.find((product) => product.id == id);

    if (product) {
      setFormData({
        productName: product.name,
        category: product.category,
        price: product.price,
        stockQuantity: product.stock_quantity,
      });
    }
  }, [id, products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length === 0) {
      updateProduct();
      history("/Product");
    } else {
      setErrors(formErrors);
    }
  };

  const updateProduct = () => {
    const updatedProducts = products.map((item) =>
      item.id == id
        ? {
            ...item,
            name: formData.productName,
            category: formData.category,
            price: formData.price,
            stock_quantity: formData.stockQuantity,
          }
        : item
    );
    setProducts(updatedProducts);
  };

  return (
    <div className=" h-auto flex justify-center items-center pb-8 pt-6 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-10 my-2  bg-gray-200 rounded-lg border-2 shadow-2xl"
      >
        <div className="mb-4">
          <label htmlFor="productName" className="block mb-2">
            Product Name:
            <input
              id="productName"
              type="text"
              value={formData.productName}
              onChange={(e) =>
                setFormData({ ...formData, productName: e.target.value })
              }
              required
              className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:border-gray-400"
            />
            {errors.productName && (
              <span className="text-red-500">{errors.productName}</span>
            )}
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2">
            Category:
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
            {errors.category && <span>{errors.category}</span>}
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="Price" className="block mb-2">
            Price:
            <input
              type="text"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              required
              className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:border-gray-400"
            />
            {errors.price && <span>{errors.price}</span>}
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="Stock Quantity" className="block mb-2">
            Stock Quantity:
            <input
              type="text"
              value={formData.stockQuantity}
              onChange={(e) =>
                setFormData({ ...formData, stockQuantity: e.target.value })
              }
              required
              className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:border-gray-400"
            />
            {errors.stockQuantity && <span>{errors.stockQuantity}</span>}
          </label>
        </div>
        <button
          type="submit"
          className="ml-28 px-6 py-3 text-white bg-black font-bold rounded-xl hover:scale-105 hover:ease-in-out delay-200 focus:outline-none"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
