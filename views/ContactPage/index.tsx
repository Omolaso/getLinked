import Navbar from "@/components/Navbar";
import LargeScreenContact from "./LargeScreenContact";

const ContactPage = () => {
	return (
		<main className="w-full bg-black min-h-screen">
			<Navbar />
			<section className="flex items-center justify-center min-h-[50vh] p-4 bg-[transparent] text-white">
				<LargeScreenContact />
			</section>
		</main>
	);
};

export default ContactPage;
