const validateForm = (formData) => {
  const errors = {};

  if (!formData.productName.trim()) {
    errors.productName = "Product name is required";
  }
  if (!formData.category.trim()) {
    errors.category = "Category is required";
  }
  if (
    !formData.price ||
    isNaN(formData.price) ||
    String(formData.price).trim() === ""
  ) {
    errors.price = "Price must be a valid number";
  }
  if (
    !formData.stockQuantity ||
    isNaN(formData.stockQuantity) ||
    String(formData.stockQuantity).trim() === ""
  ) {
    errors.stockQuantity = "Stock quantity must be a valid number";
  }

  return errors;
};

export default validateForm;
