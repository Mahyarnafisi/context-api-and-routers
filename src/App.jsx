import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout/AppLayout";
import Email from "./components/Email/Email";
import Profile from "./components/Profile/Profile";
import Setting from "./components/Setting/Setting";
import NewEmail from "./components/NewEmail/NewEmail";
import SentEmail from "./components/SentEmail/SentEmail";
import Spam from "./components/Spam/Spam";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="email" />} />
          <Route path="email" element={<Email />}>
            <Route index element={<Navigate to="newEmail" />} />
            <Route path="newEmail" element={<NewEmail />} />
            <Route path="sentEmail" element={<SentEmail />} />
            <Route path="spam" element={<Spam />} />
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
