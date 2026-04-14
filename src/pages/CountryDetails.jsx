import { useEffect, useState, useTransition } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getCountryDetailData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";

export const CountryDetails = () => {
  const params = useParams();
  // We'll use params.id which represents the common name passed from the card
  const countryId = params.id;

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryDetailData(countryId);
        if (res.status === 200) {
          setCountry(res.data[0]);
        }
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    });
  }, [countryId]);

  if (isPending) return <Loader />;

  return (
    <section className="country-details bg-[#E1E2E4] min-h-[85vh] py-20 px-4 sm:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-[#1c1c1c] rounded-[2.5rem] p-8 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row gap-16 items-center overflow-hidden relative group">
           {/* Background Glow */}
           <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#E1E2E4]/[0.02] rounded-full blur-[100px] pointer-events-none" />

          {country && (
            <>
              <div className="flex-1 w-full max-w-lg">
                <img
                  src={country.flags.svg}
                  alt={country.flags.alt || "Flag"}
                  className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              <div className="flex-1 flex flex-col gap-8 text-[#E1E2E4] relative z-10">
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white">
                  {country.name.official}
                </h1>

                <div className="grid grid-cols-1 gap-6 font-body">
                  <p className="flex items-baseline gap-3">
                    <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/40 whitespace-nowrap min-w-[140px]">Native Names:</span>
                    <span className="text-base text-white/90">{Object.values(country.name.nativeName || {}).map(n => n.common).join(", ") || country.name.common}</span>
                  </p>
                  <p className="flex items-baseline gap-3">
                    <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/40 whitespace-nowrap min-w-[140px]">Population:</span>
                    <span className="text-base text-white/90 font-bold">{country.population.toLocaleString()}</span>
                  </p>
                  <p className="flex items-baseline gap-3">
                    <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/40 whitespace-nowrap min-w-[140px]">Region:</span>
                    <span className="text-base text-white/90">{country.region}</span>
                  </p>
                  <p className="flex items-baseline gap-3">
                    <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/40 whitespace-nowrap min-w-[140px]">Sub Region:</span>
                    <span className="text-base text-white/90">{country.subregion}</span>
                  </p>
                  <p className="flex items-baseline gap-3">
                    <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/40 whitespace-nowrap min-w-[140px]">Capital:</span>
                    <span className="text-base text-white/90">{country.capital?.[0]}</span>
                  </p>
                  <p className="flex items-baseline gap-3">
                    <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/40 whitespace-nowrap min-w-[140px]">Top Level Domain:</span>
                    <span className="text-base text-white/90">{country.tld?.[0]}</span>
                  </p>
                  <p className="flex items-baseline gap-3">
                    <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/40 whitespace-nowrap min-w-[140px]">Currencies:</span>
                    <span className="text-base text-white/90">{Object.values(country.currencies || {}).map((cur) => cur.name).join(", ")}</span>
                  </p>
                  <p className="flex items-baseline gap-3">
                    <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/40 whitespace-nowrap min-w-[140px]">Languages:</span>
                    <span className="text-base text-white/90">{Object.values(country.languages || {}).sort().join(", ")}</span>
                  </p>
                </div>

                <div className="mt-6">
                  <NavLink to="/country">
                    <button className="px-12 py-4 rounded-full bg-[#E1E2E4] text-[#1c1c1c] hover:bg-white hover:scale-105 active:scale-95 font-heading font-black uppercase tracking-widest text-[12px] transition-all duration-300 shadow-xl">
                      &larr; Go Back
                    </button>
                  </NavLink>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
