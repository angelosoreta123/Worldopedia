import SearchBar from "../components/SearchBar";
import axios from "axios";
import { useState, useEffect } from "react";
import List from "../components/List";
import { SearchContext } from "../context/SearchContext";
import Spinner from "../components/Spinner";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(true);

  const mapCountry = () => {
    const filteredCountry = countries
      .filter(
        (country) =>
          (region === "All" && countries) ||
          !region ||
          region === country.region
      )
      .filter((country) =>
        country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
      );
    return <List countries={filteredCountry} />;
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countries = response.data;

        const sortedCountries = countries.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <SearchContext.Provider
      value={{ searchCountry, setSearchCountry, region, setRegion }}
    >
      <div className="mt-20 w-full flex items-center justify-center flex-col gap-10 pb-4">
        <SearchBar />
        {loading ? <Spinner loading={loading} /> : mapCountry()}
      </div>
    </SearchContext.Provider>
  );
};

export default HomePage;
