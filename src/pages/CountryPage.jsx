import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const CountryPage = () => {
  const { theme } = useContext(ThemeContext);
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        );
        console.log(response.data);
        setCountry(response.data[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountry();
  }, [name]);

  const renderCurrencies = () => {
    if (country.currencies) {
      const currenciesArray = Object.values(country.currencies);

      const currencyNames = currenciesArray
        .map((currency) => currency.name)
        .join(", ");

      return (
        <p className="text-sm">
          <span className="font-bold">Currencies:</span> {currencyNames}
        </p>
      );
    }
    return (
      <p>
        <span className="font-bold">Currencies:</span> N/A
      </p>
    );
  };

  const renderLanguages = () => {
    if (country.languages && Object.keys(country.languages).length > 0) {
      const languagesArray = Object.values(country.languages);
      return <p>{languagesArray.join(", ")}</p>;
    }
    return "N/A";
  };

  return (
    <section
      className={`max-w-7xl mt-20 w-full flex flex-col gap-20 px-4 ${
        theme === "dark" ? "text-white" : "text-veryDarkBlue"
      } justify-center pb-4`}
    >
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <Link to={'/Worldopedia'}>
            <button
              className={`flex items-center gap-2 w-fit py-2 px-8 rounded-md shadow-lg ${
                theme === "dark" ? "bg-darkBlue" : "bg-gray-200"
              }`}
            >
              <FaArrowLeft />
              Back
            </button>
            </Link>
          <div className="flex flex-col lg:flex-row gap-20 w-full md:items-center">
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              className="flex-1 w-full lg:h-96"
            />
            <div className="flex flex-col gap-10 w-full lg:w-auto">
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-2xl">{country.name.common}</h1>
                <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
                  <div>
                    <p className="text-sm">
                      <span className="font-bold">Native Name:</span>{" "}
                      {!country.nativeName ? "N/A" : country.nativeName}
                    </p>
                    <p className="text-sm">
                      <span className="font-bold">Population:</span>{" "}
                      {!country.population.toLocaleString()
                        ? "N/A"
                        : country.population.toLocaleString()}
                    </p>
                    <p className="text-sm">
                      <span className="font-bold">Region:</span>{" "}
                      {country.region}
                    </p>
                    <p className="text-sm">
                      <span className="font-bold">Sub Region:</span>{" "}
                      {!country.subregion ? "N/A" : country.subregion}
                    </p>
                    <p className="text-sm">
                      <span className="font-bold break-words">Capital:</span>{" "}
                      {!country.capital ? "N/A" : country.capital}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-bold">Top Level Domain:</span>{" "}
                      {!country.tld ? "N/A" : country.tld}
                    </p>
                    {renderCurrencies()}
                    <div className="flex gap-1 items-center text-sm">
                      {" "}
                      <span className="font-bold">Languages:</span>{" "}
                      {renderLanguages()}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm flex md:flex-row flex-col gap-2 lg:items-center">
                <p className="font-bold">Border Countries:</p>
                <div className="flex gap-2 flex-wrap">
                  {country.borders && country.borders.length > 0 ? (
                    country.borders.map((border) => (
                      <p
                        key={border}
                        className={`${
                          theme === "dark" ? "bg-darkBlue" : "bg-gray-200"
                        } py-1 px-4 text-xs w-fit`}
                      >
                        {border}
                      </p>
                    ))
                  ) : (
                    <p>N/A</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default CountryPage;
