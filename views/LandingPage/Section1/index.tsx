"use client";

import Image from "next/image";
import linkStar from "@/public/link_star.png";
import textUnderline from "@/public/text-line.png";
import virtualBackground from "@/public/hero_man.png";
import bulb from "@/public/bulb.png";
import Button from "@/utils/button";
import { useRouter } from "next/navigation";
import Timer from "@/utils/timer";

const HeroSection = () => {
	const router = useRouter();

	const navigate = () => {
		router.push("/register");
	};
	return (
		<section className="w-full min-h-full lg:min-h-screen border-b border-b-grey px-4 pt-4 text-white mx-auto max-w-[100rem]">
			<div className="flex flex-col items-center md:item-end gap-8 w-full">
				<div className="self-center lg:self-end flex flex-col">
					<h1 className="font-bold text-center text-base lg:text-4xl italic">
						Igniting a Revolution in HR Innovation
					</h1>
					<Image
						src={textUnderline}
						alt="line"
						width={250}
						height={200}
						className="self-end hidden sm:block max-w-[7.5rem] lg:max-w-[15.8rem] w-full"
					/>
				</div>
				<div className="flex flex-col lg:flex-row items-center justify-between w-full">
					<div className="w-full max-w-[45rem] flex flex-col text-center lg:text-left text-[2rem] lg:text-[5rem] font-bold gap-4 relative">
						<div
							className="hidden xsm:block absolute translate-x-[50%] translate-y-[50%] right-[50%] xsm:left-[72%] sm:left-[65%] md:left-[62%] lg:left-[77%] top-[-2rem] lg:top-[-3rem] w-full max-w-[1.125rem] lg:max-w-[3.1rem] min-h-[1.625rem] lg:min-h-[3.2rem]"
							style={{
								backgroundImage: `url(${bulb.src})`,
								backgroundOrigin: "border-box",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
								backgroundSize: "contain",
							}}
						/>
						<div className="flex flex-col items-center lg:items-start mx-auto max-w-[18.1rem] md:max-w-[30rem] lg:max-w-[45.125rem] w-full">
							<span className="leading-none">getlinked Tech</span>
							<div className="flex flex-row items-center justify-center lg:justify-start w-full">
								<span className="">
									Hackathon<span className="text-purple">1.0</span>
								</span>
								<Image
									src={linkStar}
									alt="link"
									width={144}
									height={86}
									className="w-full max-w-[3rem] lg:max-w-[6rem] lg:min-h-[5rem]"
								/>
							</div>
							<span className="text-center lg:text-left w-full max-w-full lg:max-w-[32.625rem] text-[0.8125rem] md:text-[1.25rem] font-normal">
								Participate in getlinked tech Hackathon 2023 stand a chance to
								win a Big prize
							</span>
						</div>
						<div className="flex items-center justify-center lg:justify-start w-full">
							<Button btnValue="Register" onClick={navigate} />
						</div>
						<Timer count={10000000000} />
					</div>
					<div
						className="w-full min-h-[23rem] md:min-h-[40rem] max-h-[45rem] max-w-[52rem]"
						style={{
							backgroundImage: `url(${virtualBackground.src})`,
							backgroundOrigin: "border-box",
							backgroundPosition: "center bottom",
							backgroundRepeat: "no-repeat",
							backgroundSize: "contain",
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
