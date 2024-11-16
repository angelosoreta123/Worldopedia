import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const iconToShow = () => {
    if (theme === "dark")
      return (
        <>
          <FaSun color="white" size={18} />
          <span className="hidden md:block md:text-md md:font-semibold text-white">
            Light Mode
          </span>
        </>
      );
    else
      return (
        <>
          <FaMoon color="black" size={18} />
          <span className="hidden md:block md:text-md  md:font-semibold text-darkBlue">
            Dark Mode
          </span>
        </>
      );
  };

  return (
    <header
      className={`w-full flex justify-center p-4 ${
        theme === "dark" ? "bg-darkBlue" : "bg-gray-200"
      }`}
    >
      <div className="flex justify-between max-w-7xl w-full px-4">
        <a href="/">
          <h1
            className={`text-md md:text-2xl  ${
              theme === "dark" ? "text-white" : "text-darkBlue"
            } font-bold`}
          >
            Where in the World?
          </h1>
        </a>
        <button
          onClick={toggleTheme}
          className="flex gap-2 items-center justify-center"
        >
          {iconToShow()}
        </button>
      </div>
    </header>
  );
};

export default Header;
