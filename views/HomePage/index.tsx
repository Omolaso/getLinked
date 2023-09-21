import Navbar from "@/components/Navbar";
import HeroSection from "./Section1";
import Section2 from "./Section2";

const LandingPage = () => {
	return (
		<main className="w-full bg-black">
			<Navbar />
			{/* <HeroSection /> */}
			<Section2 />
		</main>
	);
};

export default LandingPage;
