import prizes from "@/public/prizes.png";

const Section6 = () => {
	return (
		<section className="w-full flex border-b border-b-grey min-h-screen text-white mx-auto max-w-[100rem] py-0 md:py-6">
			<div className="flex flex-col items-center gap-4 p-4 w-full">
				<div className="flex items-center justify-center md:justify-end max-w-[55rem] w-full">
					<div className="w-full flex flex-col gap-1 items-center md:items-start max-w-[25rem]">
						<p className="w-full max-w-[11rem] text-[2rem] font-bold leading-8">
							Prizes and <span className="text-purple">Rewards</span>
						</p>
						<span className="text-base font-normal text-center md:text-left">
							Highlight of the prizes or rewards for winners and for
							participants.
						</span>
					</div>
				</div>
				<div
					className="hidden md:block w-full min-h-[35rem] max-h-[50rem] max-w-[80rem]"
					style={{
						backgroundImage: `url(${prizes.src})`,
						backgroundOrigin: "border-box",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundSize: "contain",
					}}
				/>
			</div>
		</section>
	);
};

export default Section6;
