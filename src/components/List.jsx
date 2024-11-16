import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const List = ({ countries }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ul className="max-w-7xl flex flex-col sm:flex-row flex-wrap gap-5 w-full px-4 justify-start">
      {countries.map((country) => (
        <Link
          to={`/Worldopedia/${country.name.common}`}
          className={`flex flex-col pb-4 lg:basis-[calc(25%-16px)] md:basis-[calc(33.33%-16px)] sm: basis-[calc(50%-16px)]  ${
            theme === "dark"
              ? "bg-darkBlue text-white"
              : "bg-gray-200 text-veryDarkBlue"
          }`}
          key={country.cca2}
        >
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className="h-56 md:h-40 w-full"
          />
          <div className="flex flex-col p-4 gap-2">
            <h1 className="font-extrabold mb-2 text-lg break-words ">
              {country.name.common}
            </h1>
            <p className="text-sm">
              <span className="font-bold">Population:</span>{" "}
              {!country.population.toLocaleString()
                ? "N/A"
                : country.population.toLocaleString()}
            </p>
            <p className="text-sm">
              <span className="font-bold">Region:</span> {country.region}
            </p>
            <p className="text-sm">
              <span className="font-bold break-words">Capital:</span>{" "}
              {!country.capital ? "N/A" : country.capital}
            </p>
          </div>
        </Link>
      ))}
    </ul>
  );
};

export default List;
