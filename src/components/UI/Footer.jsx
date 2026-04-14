import { MdPlace, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import footerData from "../../api/footerApi";

export const Footer = () => {
    // Get primary contact info from data
    const headOffice = footerData.find(i => i.id === 1);
    const emailSupport = footerData.find(i => i.id === 2);
    const callUs = footerData.find(i => i.id === 3);

    return (
        <footer className="bg-[#1c1c1c] text-[#E1E2E4] pt-24 pb-12 px-4 sm:px-8 font-body relative overflow-hidden">
            {/* Background design accents */}
            <div className="absolute top-[-10%] left-[-5%] w-[30vw] h-[30vw] rounded-full bg-[#E1E2E4]/[0.02] blur-3xl pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Branding & Social Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16 pb-12 border-b border-[#E1E2E4]/10">
                    <div className="max-w-xl">
                        <h2 className="font-heading text-4xl sm:text-5xl font-black tracking-tighter mb-6">
                            WORLD-ATLAS.
                        </h2>
                        <p className="text-base sm:text-lg text-[#E1E2E4]/60 leading-relaxed">
                            Empowering your global journey with detailed insights, cultural heritage, and geographical data of every nation.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#E1E2E4]/40">Connect Socially</h4>
                        <div className="flex items-center gap-4">
                            {[
                                { Icon: FaInstagram, link: "https://www.instagram.com/_aayush_raghuwanshi_/" },
                                { Icon: FaLinkedin, link: "https://www.linkedin.com/in/ayush-raghuwanshi-dev/" },
                                { Icon: FaGithub, link: "https://github.com/Ayush-Raghuwanshi-Dev" }
                            ].map((social, idx) => (
                                <a 
                                    key={idx} 
                                    href={social.link} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl bg-[#E1E2E4]/5 flex items-center justify-center text-xl hover:bg-[#E1E2E4] hover:text-[#1c1c1c] transition-all duration-300 border border-[#E1E2E4]/10"
                                >
                                    <social.Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Compact Contact Info Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                    <div className="flex gap-6 items-start group">
                        <div className="w-12 h-12 rounded-xl bg-[#E1E2E4]/5 flex items-center justify-center text-[#E1E2E4] shrink-0 border border-[#E1E2E4]/10 group-hover:bg-[#E1E2E4] group-hover:text-[#1c1c1c] transition-all duration-300">
                            <MdPlace className="text-xl" />
                        </div>
                        <div>
                            <h4 className="font-heading text-[11px] font-bold uppercase tracking-widest text-[#E1E2E4]/40 mb-2">Head office</h4>
                            <p className="text-base text-[#E1E2E4]/80 leading-snug">{headOffice?.details}</p>
                        </div>
                    </div>

                    <div className="flex gap-6 items-start group">
                        <div className="w-12 h-12 rounded-xl bg-[#E1E2E4]/5 flex items-center justify-center text-[#E1E2E4] shrink-0 border border-[#E1E2E4]/10 group-hover:bg-[#E1E2E4] group-hover:text-[#1c1c1c] transition-all duration-300">
                            <MdEmail className="text-xl" />
                        </div>
                        <div>
                            <h4 className="font-heading text-[11px] font-bold uppercase tracking-widest text-[#E1E2E4]/40 mb-2">Email us</h4>
                            <a href={emailSupport?.action} className="text-base text-[#E1E2E4]/80 hover:text-[#E1E2E4] transition-colors">{emailSupport?.details.split(' (')[0]}</a>
                        </div>
                    </div>

                    <div className="flex gap-6 items-start group">
                        <div className="w-12 h-12 rounded-xl bg-[#E1E2E4]/5 flex items-center justify-center text-[#E1E2E4] shrink-0 border border-[#E1E2E4]/10 group-hover:bg-[#E1E2E4] group-hover:text-[#1c1c1c] transition-all duration-300">
                            <MdPhone className="text-xl" />
                        </div>
                        <div>
                            <h4 className="font-heading text-[11px] font-bold uppercase tracking-widest text-[#E1E2E4]/40 mb-2">Call us</h4>
                            <a href={callUs?.action} className="text-base text-[#E1E2E4]/80 hover:text-[#E1E2E4] transition-colors">{callUs?.details.split(' (')[0]}</a>
                        </div>
                    </div>
                </div>

                {/* Sub-Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-[#E1E2E4]/10 text-[13px] text-[#E1E2E4]/40 font-heading tracking-wider">
                    <p>© 2026 WORLD-ATLAS. ALL RIGHTS RESERVED.</p>
                    <div className="flex items-center gap-8 uppercase">
                        <a href="#" className="hover:text-[#E1E2E4] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#E1E2E4] transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-[#E1E2E4] transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};