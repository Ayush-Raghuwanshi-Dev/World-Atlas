import { HeroSection } from "../components/UI/HeroSection";
import { About } from "./About";
import { Contact } from "./ContactSection";

export const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
            <Contact />
        </>
    );
};