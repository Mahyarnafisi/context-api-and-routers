import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout/AppLayout";
import Email from "./components/Products/Products";
import Profile from "./components/Profile/Profile";
import Setting from "./components/Setting/Setting";
import SentEmail from "./components/SentEmail/SentEmail";
import Spam from "./components/Spam/Spam";
import { useDataBase } from "./Context/dataContext";
import { useEffect } from "react";
import Products from "./components/Products/Products";
import ProductsList from "./components/ProductsList/ProductsList";
import SmartPhones from "./components/SmartPhones/SmartPhones";
import Laptops from "./components/Laptops/Laptops";

function App() {
  const { fetchingData } = useDataBase();

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="products" />} />
          <Route path="products" element={<Products />}>
            <Route index element={<Navigate to="products" />} />
            <Route path="products" element={<ProductsList />}>
              <Route index element={<Navigate to="smartphones" />} />
              <Route path="smartphones" element={<SmartPhones />} />
              <Route path="laptops" element={<Laptops />} />
            </Route>
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
          <Route path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
