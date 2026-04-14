import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-50 py-6 px-4 sm:px-8 bg-[#E1E2E4] shadow-md border-b border-border">
            <div className="container flex items-center justify-between px-6 xl:px-0">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <NavLink to="/">
                        <h1 className="font-heading text-h2 font-bold uppercase tracking-tight text-primary m-0">
                            WORLD-ATLAS.
                        </h1>
                    </NavLink>
                </div>

                {/* Main Navigation */}
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-10 m-0 p-0 list-none">
                        <li>
                            <NavLink
                                to="/"
                                className="font-heading text-[13px] font-bold uppercase tracking-widest text-primary hover:text-[#FE5000] transition-colors"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className="font-heading text-[13px] font-bold uppercase tracking-widest text-primary hover:text-[#FE5000] transition-colors"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/country"
                                className="font-heading text-[13px] font-bold uppercase tracking-widest text-primary hover:text-[#FE5000] transition-colors"
                            >
                                Country
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className="font-heading text-[13px] font-bold uppercase tracking-widest text-primary hover:text-[#FE5000] transition-colors"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Thin Border Button */}
                <div className="flex-shrink-0">
                    <NavLink
                        to="/country"
                        className="inline-block rounded-full px-8 py-2.5 font-heading text-[13px] font-bold uppercase tracking-widest text-[#1c1c1c] border border-[#1c1c1c] hover:bg-[#1c1c1c] hover:text-[#E1E2E4] transition-all duration-300"
                    >
                        Explore Now
                    </NavLink>
                </div>
            </div>
        </header>
    );
};