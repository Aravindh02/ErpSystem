import "./index.css";
import Dashboard from "./Components/DashBoard/Dashboard";
import Order from "./Components/OrderPage/Order";
import Product from "./Components/ProductPage/Product";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/ProductPage/AddProduct";
import EditProduct from "./Components/ProductPage/EditProduct";
import { AppProvider } from "./Components/Context/AppContext";
import UpdateOrderStatusModal from "./Components/OrderPage/UpdateOrderStatusModal";
import CalendarPage from "./Components/Calendar/CalendarPage";

function App() {
  return (
    <>
      <NavBar />
      <AppProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="product" element={<Product />} />
          <Route path="AddProduct" element={<AddProduct />} />
          <Route path="/EditProduct/:id" element={<EditProduct />} />
          <Route path="Order" element={<Order />} />
          <Route path="CalendarPage" element={<CalendarPage />} />
        </Routes>
        <UpdateOrderStatusModal />
      </AppProvider>
    </>
  );
}

export default App;
