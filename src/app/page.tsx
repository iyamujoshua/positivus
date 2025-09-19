import Image from "next/image";
import NavBar from "@/Components/Navbar";
import HeroSection from "@/Components/Herosection";
import BrandSection from "@/Components/brands";
export default function Home() {
  return (
   <>
<NavBar />
<HeroSection/>
<BrandSection />
   </>
  );
}
