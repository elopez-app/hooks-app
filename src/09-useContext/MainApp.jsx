import { Routes, Route, Navigate } from "react-router-dom";
import { Homepage } from "./Homepage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>Main App</h1>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/*" element={<Navigate to="about" />} />
      </Routes>
    </UserProvider>
  );
};
