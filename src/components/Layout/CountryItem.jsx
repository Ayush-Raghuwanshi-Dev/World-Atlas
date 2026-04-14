import { NavLink } from "react-router-dom";

export const CountryItem = ({ country }) => {
    const { flags, name, population, region, capital } = country;

    return (
        <li className="country-card bg-[#1c1c1c] rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col group min-h-[480px]">
            <div className="w-full h-56 overflow-hidden bg-[#242424] flex items-center justify-center p-6">
                <img 
                    src={flags.svg} 
                    alt={flags.alt || name.common} 
                    className="max-w-full max-h-full object-contain rounded-lg shadow-xl group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
                <div className="min-h-[3rem] mb-4">
                    <h2 className="font-heading text-2xl font-bold text-white tracking-tight leading-tight">
                        {name.common.length > 10 ? name.common.slice(0, 10) + "..." : name.common}
                    </h2>
                </div>
                
                <div className="space-y-3 mb-8">
                    <p className="flex items-baseline gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Population:</span>
                        <span className="text-sm font-bold text-white/90">{population.toLocaleString()}</span>
                    </p>
                    <p className="flex items-baseline gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Region:</span>
                        <span className="text-sm font-bold text-white/90">{region}</span>
                    </p>
                    <p className="flex items-baseline gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Capital:</span>
                        <span className="text-sm font-bold text-white/90 truncate">{capital?.[0] || "N/A"}</span>
                    </p>
                </div>

                <div className="mt-auto">
                    <NavLink to={`/country/${name.common}`}>
                        <button className="w-full py-4 rounded-full bg-[#E1E2E4] text-[#1c1c1c] hover:bg-white hover:scale-[1.02] active:scale-[0.98] font-heading font-black uppercase tracking-widest text-[11px] transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                            Explore More 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </button>
                    </NavLink>
                </div>
            </div>
        </li>
    );
};
