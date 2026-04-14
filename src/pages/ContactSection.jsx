export const Contact = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Form submitted: ", data);
    }
    return (
        <section className="bg-[#E1E2E4] min-h-[80vh] pt-20 pb-24 px-4 sm:px-8 flex flex-col items-center">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[#1c1c1c] leading-[1.05] text-center mt-12 mb-12 drop-shadow-sm">Contact Us</h2>
            
            <form onSubmit={handleFormSubmit} className="w-full max-w-lg bg-[#1c1c1c] rounded-[2rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col gap-6 relative overflow-hidden group">
                {/* Glow accent */}
                <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-[#E1E2E4]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col gap-2 relative z-10">
                    <label htmlFor="username" className="font-heading text-[11px] font-bold uppercase tracking-widest text-[#E1E2E4]/60 ml-1">Full Name</label>
                    <input
                        className="bg-[#E1E2E4]/5 border border-[#E1E2E4]/10 rounded-xl px-5 py-4 text-[#E1E2E4] font-body text-base placeholder-[#E1E2E4]/30 focus:outline-none focus:border-[#E1E2E4]/30 focus:bg-[#E1E2E4]/10 transition-all duration-300"
                        type="text"
                        required
                        autoComplete="off"
                        placeholder="Enter your name..."
                        name="username"
                        id="username"
                    />
                </div>
                
                <div className="flex flex-col gap-2 relative z-10">
                    <label htmlFor="email" className="font-heading text-[11px] font-bold uppercase tracking-widest text-[#E1E2E4]/60 ml-1">Email Address</label>
                    <input
                        className="bg-[#E1E2E4]/5 border border-[#E1E2E4]/10 rounded-xl px-5 py-4 text-[#E1E2E4] font-body text-base placeholder-[#E1E2E4]/30 focus:outline-none focus:border-[#E1E2E4]/30 focus:bg-[#E1E2E4]/10 transition-all duration-300"
                        type="email"
                        required
                        autoComplete="off"
                        placeholder="Enter your email..."
                        name="email"
                        id="email"
                    />
                </div>
                
                <div className="flex flex-col gap-2 relative z-10">
                    <label htmlFor="message" className="font-heading text-[11px] font-bold uppercase tracking-widest text-[#E1E2E4]/60 ml-1">Message</label>
                    <textarea
                        className="bg-[#E1E2E4]/5 border border-[#E1E2E4]/10 rounded-xl px-5 py-4 text-[#E1E2E4] font-body text-base placeholder-[#E1E2E4]/30 focus:outline-none focus:border-[#E1E2E4]/30 focus:bg-[#E1E2E4]/10 transition-all duration-300 resize-none min-h-[150px]"
                        name="message"
                        id="message"
                        required
                        autoComplete="off"
                        placeholder="Enter your message..."
                    ></textarea>
                </div>
                
                <div className="pt-4 relative z-10">
                    <button 
                        type="submit" 
                        value="submit"
                        className="w-full py-4 rounded-xl bg-[#E1E2E4] text-[#1c1c1c] hover:bg-transparent hover:text-[#E1E2E4] border border-transparent hover:border-[#E1E2E4]/30 font-heading font-bold uppercase tracking-widest text-[13px] transition-colors duration-300 shadow-lg"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    )
}