import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="min-h-screen bg-[#E1E2E4] flex flex-col items-center justify-center px-4 sm:px-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full p-6 text-left border-b border-[#1c1c1c]/10">
                <NavLink to="/">
                    <h1 className="font-heading text-h3 font-bold uppercase tracking-tight text-[#1c1c1c] m-0">
                        WORLD-ATLAS.
                    </h1>
                </NavLink>
            </div>

            <div className="relative z-10 flex flex-col items-center max-w-2xl mt-16">
                <span className="font-heading text-[10rem] md:text-[14rem] font-bold tracking-tighter text-[#1c1c1c] leading-none opacity-[0.03] absolute top-[-50%] left-1/2 -translate-x-1/2 pointer-events-none select-none">
                    404
                </span>

                <h2 className="font-heading text-[2rem] md:text-[3rem] font-bold uppercase tracking-tight text-[#1c1c1c] mt-4 mb-2">
                    Oops! {error?.statusText || "Something went wrong"}
                </h2>
                
                <p className="font-body text-base md:text-lg text-[#1c1c1c]/70 mb-10 max-w-md mx-auto leading-relaxed">
                    {error?.message || "The location you are looking for might have been moved, renamed, or doesn't exist on our map."}
                </p>

                <NavLink 
                    to="/" 
                    className="inline-block rounded-full px-10 py-3.5 font-heading text-[13px] font-bold uppercase tracking-widest text-[#E1E2E4] bg-[#1c1c1c] hover:bg-transparent hover:text-[#1c1c1c] border border-[#1c1c1c] transition-colors duration-300"
                >
                    Return Home
                </NavLink>
            </div>
        </div>
    )
};