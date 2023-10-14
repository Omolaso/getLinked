import Navbar from "@/components/Navbar";
import LargeScreenContact from "./LargeScreenContact";
import SmallScreenContact from "./SmallScreenContact";

const ContactPage = () => {
	return (
		<>
			<main className="hidden md:block w-full bg-black min-h-screen">
				<Navbar />
				<section className="flex items-center justify-center min-h-[50vh] p-4 bg-[transparent] text-white">
					<LargeScreenContact />
				</section>
			</main>
			<SmallScreenContact />
		</>
	);
};

export default ContactPage;
