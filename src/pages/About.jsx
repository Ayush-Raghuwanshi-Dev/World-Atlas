import countryData from "../api/countryData.json";

export const About = () => {
    return (
        <section className="bg-[#E1E2E4] pt-24 pb-24 px-4 sm:px-8">
            <div className="container mx-auto max-w-7xl">
                <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[#1c1c1c] leading-[1.05] text-center mb-16 drop-shadow-sm">
                    Here are the Interesting Facts
                    <br />
                    we're proud of
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {countryData.map((country) => (
                        <div 
                            key={country.id} 
                            className="group bg-[#1c1c1c] border border-[#1c1c1c]/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-[2rem] p-8 hover:bg-[#E1E2E4] hover:border-[#1c1c1c]/10 hover:shadow-[0_20px_50px_rgba(28,28,28,0.25)] transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Minimal Gradient accent glow */}
                            <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-[#E1E2E4]/5 rounded-full blur-3xl group-hover:bg-[#1c1c1c]/5 transition-colors duration-500 pointer-events-none" />

                            <h3 className="font-heading text-3xl font-bold uppercase tracking-tight text-[#E1E2E4] group-hover:text-[#1c1c1c] mb-8 transition-colors duration-500 flex items-center gap-3">
                                <img 
                                    src={`https://flagcdn.com/w40/${country.countryCode}.png`} 
                                    srcSet={`https://flagcdn.com/w80/${country.countryCode}.png 2x`} 
                                    alt={`${country.countryName} flag`} 
                                    className="w-10 h-auto rounded shadow-sm opacity-90 group-hover:opacity-100 transition-opacity duration-500 bg-[#1c1c1c]/10" 
                                /> 
                                {country.countryName}
                            </h3>
                            
                            <div className="space-y-4 font-body text-base text-[#E1E2E4]/80 group-hover:text-[#1c1c1c]/75 transition-colors duration-500">
                                <p className="flex flex-col">
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#E1E2E4]/40 group-hover:text-[#1c1c1c]/40 mb-1 transition-colors duration-500">Capital</span>
                                    <span className="flex items-center gap-2">🏛️ {country.capital}</span>
                                </p>
                                <p className="flex flex-col">
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#E1E2E4]/40 group-hover:text-[#1c1c1c]/40 mb-1 transition-colors duration-500">Population</span>
                                    <span className="flex items-center gap-2">👨‍👩‍👧‍👦 {country.population}</span>
                                </p>
                                <p className="flex flex-col mt-6 pt-6 border-t border-[#E1E2E4]/10 group-hover:border-[#1c1c1c]/10 transition-colors duration-500">
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#E1E2E4]/40 group-hover:text-[#1c1c1c]/40 mb-2 transition-colors duration-500">Interesting Fact</span>
                                    <span className="leading-relaxed text-[15px]">💡 {country.interestingFact}</span>
                                </p>
                                <div className="pt-6">
                                    <button className="w-full py-4 rounded-full bg-[#E1E2E4] text-[#1c1c1c] group-hover:bg-[#1c1c1c] group-hover:text-[#E1E2E4] border border-transparent font-heading font-bold uppercase tracking-widest text-[12px] transition-colors duration-500">
                                        Explore More &rarr;
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};