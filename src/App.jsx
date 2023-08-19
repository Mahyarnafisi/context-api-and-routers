import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout/AppLayout";
import Email from "./components/Email/Email";
import Profile from "./components/Profile/Profile";
import Setting from "./components/Setting/Setting";
import NewEmail from "./components/NewEmail/NewEmail";
import SentEmail from "./components/SentEmail/SentEmail";
import Spam from "./components/Spam/Spam";
import { ThemeMode } from "./Context/ThemeMode";

// import { createContext, useState } from "react";

// export const ThemeContext = createContext();

function App() {
  // const [theme, setTheme] = useState(true);

  // const darkTheme = {
  //   backgroundColor: "#333333",
  //   color: "white",
  // };
  // const lightTheme = {
  //   backgroundColor: "#f1f1f1",
  //   color: "#444444",
  // };

  // const modeToggle = theme ? lightTheme : darkTheme;

  return (
    <ThemeMode>
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
    </ThemeMode>
  );
}

export default App;
