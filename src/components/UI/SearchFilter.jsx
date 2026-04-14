export const SearchFilter = ({ search, setSearch, filter, setFilter, sort, setSort }) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSort = (value) => {
    setSort(value);
  };

  return (
    <section className="section-searchFilter container mx-auto mb-16 mt-8 flex flex-col lg:flex-row items-center justify-between gap-8 px-4">
      {/* Search Input */}
      <div className="relative w-full lg:max-w-md">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none z-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={handleInputChange}
          className="w-full bg-[#1c1c1c] text-white py-4 pl-14 pr-6 rounded-full outline-none border-2 border-transparent focus:border-white/20 transition-all duration-300 placeholder:text-white/20 shadow-lg text-[15px]"
        />
      </div>

      {/* Sort Buttons */}
      <div className="flex items-center gap-4 bg-[#1c1c1c]/50 p-2 rounded-full backdrop-blur-sm shadow-md">
        <button
          onClick={() => handleSort("asc")}
          className={`px-8 py-3 rounded-full font-heading font-black uppercase tracking-widest text-[11px] transition-all duration-300 ${
            sort === "asc" ? "bg-white text-[#1c1c1c] shadow-lg" : "text-white/60 hover:text-white"
          }`}
        >
          Asc
        </button>
        <button
          onClick={() => handleSort("desc")}
          className={`px-8 py-3 rounded-full font-heading font-black uppercase tracking-widest text-[11px] transition-all duration-300 ${
            sort === "desc" ? "bg-white text-[#1c1c1c] shadow-lg" : "text-white/60 hover:text-white"
          }`}
        >
          Desc
        </button>
      </div>

      {/* Region Filter */}
      <div className="relative w-full lg:max-w-[240px]">
        <select
          value={filter}
          onChange={handleSelectChange}
          className="w-full bg-[#1c1c1c] text-white py-4 px-8 rounded-full outline-none border-2 border-transparent focus:border-white/20 transition-all duration-300 appearance-none cursor-pointer shadow-lg text-[13px] font-bold uppercase tracking-widest"
        >
          <option value="all">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>
    </section>
  );
};
