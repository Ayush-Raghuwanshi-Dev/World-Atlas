import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Home = () => {
    return (
        <main className="min-h-screen bg-[#E1E2E4] pt-28 pb-16 px-4 sm:px-8 flex items-center relative overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                {/* Text Content */}
                <div className="flex flex-col items-start gap-6 lg:gap-8 text-left order-2 lg:order-1">
                    <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tighter text-[#1c1c1c] leading-[1.1] drop-shadow-sm">
                        Explore the World, <span className="block mt-1">One Country at a time.</span>
                    </h1>
                    
                    <p className="font-body text-base sm:text-lg md:text-xl text-[#1c1c1c]/75 max-w-lg leading-relaxed mix-blend-multiply">
                        Discover the history, culture, and beauty of every nation. Sort, search & filter through countries to find the details you need.
                    </p>
                    
                    <NavLink 
                        to="/country"
                        className="group inline-flex items-center gap-3 rounded-full px-8 py-4 font-heading text-[13px] font-bold uppercase tracking-widest text-[#E1E2E4] bg-[#1c1c1c] border border-[#1c1c1c] hover:bg-transparent hover:text-[#1c1c1c] transition-all duration-300 mt-2"
                    >
                        Start Exploring 
                        <FaLongArrowAltRight className="text-lg transform group-hover:translate-x-1.5 transition-transform duration-300" />
                    </NavLink>
                </div>

                {/* Hero Image */}
                <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2 w-full max-w-md lg:max-w-none mx-auto scale-95 origin-center">
                    <img 
                        src="/images/hero-img.png" 
                        alt="World beauty" 
                        className="w-full h-auto object-contain max-h-[500px] lg:max-h-[600px] drop-shadow-2xl hover:scale-105 transition-transform duration-[800ms] ease-out mix-blend-multiply" 
                    />
                </div>
            </div>

            {/* Background design accents */}
            <div className="absolute top-[20%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#1c1c1c]/[0.02] blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#1c1c1c]/[0.03] blur-3xl pointer-events-none" />
        </main>
    )
}