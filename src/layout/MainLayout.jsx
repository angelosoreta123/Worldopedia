import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useState } from "react";

const MainLayout = () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(savedTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="min-h-dvh w-full flex flex-col items-center" id={theme}>
        <Header />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
};

export default MainLayout;
