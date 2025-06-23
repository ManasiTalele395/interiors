
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection"
import ProductsSection from "../components/ProductsSection";
import VisionSection from "../components/VisionSection";
import CreativeSolutions from "../components/CreativeSolutions";
import Footer from "../components/Footer"

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <main className ="font-work-sans">
            <Navbar />
            <HeroSection/>
            <ProductsSection/>
            <VisionSection/>
            <CreativeSolutions/>
            <Footer/>
            {children}
        </main>
    );
}