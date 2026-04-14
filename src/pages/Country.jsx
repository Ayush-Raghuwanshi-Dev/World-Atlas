import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryItem } from "../components/Layout/CountryItem";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    });
  }, []);

  if (isPending) return <Loader />;

  // Sorting Logic
  const sortCountries = (data) => {
    return [...data].sort((a, b) => {
      return sort === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
  };

  // Searching logic
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  // Filtering logic
  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  const finalCountries = sortCountries(filterCountries);

  return (
    <section className="country-section bg-[#E1E2E4] py-20 px-4 sm:px-8 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {finalCountries.map((country, index) => (
            <CountryItem country={country} key={country.cca2 || index} />
          ))}
        </ul>
      </div>
    </section>
  );
};