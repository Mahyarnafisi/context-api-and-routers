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
            <Route path="products" element={<ProductsList />} />
            {/* <Route path="sentEmail" element={<SentEmail />} /> */}
            {/* <Route path="spam" element={<Spam />} /> */}
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
