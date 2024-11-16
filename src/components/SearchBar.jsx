import Dropdown from "./Dropdown";
import Input from "./Input";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { SearchContext } from "../context/SearchContext";

const SearchBar = () => {
  const { theme } = useContext(ThemeContext);
  const { searchCountry, setSearchCountry, region, setRegion } =
    useContext(SearchContext);
  console.log(searchCountry);
  return (
    <section className="max-w-7xl w-full flex px-4 flex-col gap-10 md:gap-0 md:flex-row justify-between -mt-10">
      <div
        className={`flex flex-1 ${
          theme === "dark" ? "bg-darkBlue" : "bg-gray-200"
        } p-3 rounded-md md:rounded-none md:rounded-l-md`}
      >
        <FaSearch size={20} color="darkGray" className="mr-4 cursor-pointer" />
        <Input
          className={`w-full outline-none bg-inherit border-none text-inherit ${
            theme === "dark" ? " text-white" : "text-veryDarkBlue"
          }`}
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
        />
      </div>

      <div
        className={`${
          theme === "dark"
            ? "bg-darkBlue text-white"
            : "bg-gray-200 text-veryDarkBlue"
        } flex p-4 rounded-md md:rounded-none md:rounded-r-md`}
      >
        <Dropdown
          className="border-none outline-none w-full bg-inherit text-inherit"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
      </div>
    </section>
  );
};

export default SearchBar;
