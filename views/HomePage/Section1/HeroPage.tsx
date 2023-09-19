import Image from "next/image";
import textUnderline from "@/public/text-line.png";
import virtualMan from "@/public/manWithVirtualScreen.png";
import virtualBackground from "@/public/virtualBackground.svg";

const HeroPage = () => {
	return (
		<section className="flex flex-row items-center justify-between w-full p-4 text-white">
			<div className="left-masked">
				<h1 className="text-3xl">TETE</h1>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col items-end">
					<h1 className="font-bold text-4xl italic">
						Igniting a Revolution in HR Innovation
					</h1>
					<Image src={textUnderline} alt="line" width={250} height={200} />
				</div>
				<div className="w-full">
					<Image
						src={virtualMan}
						alt="line"
						width={250}
						height={200}
						className="w-full"
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroPage;
