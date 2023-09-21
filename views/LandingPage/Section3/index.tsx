import peopleReading from "@/public/people_reading.png";
import Button from "@/utils/button";

interface ISection3Props {
	key: string;
	value: string;
}

const section3Data: ISection3Props[] = [
	{
		key: "Innovation and Creativity",
		value:
			"Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
	},
	{
		key: "Functionality",
		value:
			"Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution",
	},
	{
		key: "Impact and Relevance",
		value:
			"Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
	},
	{
		key: "Technical complexity",
		value:
			"Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
	},
	{
		key: "Technical complexity",
		value:
			"Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
	},
	{
		key: "Adherence to Hackathon Rules",
		value:
			"Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements",
	},
];

const Section3 = () => {
	return (
		<section className="w-full flex border-b border-b-grey min-h-screen text-white mx-auto max-w-[100rem] py-0 md:py-6">
			<div className="flex flex-col md:flex-row items-center justify-between p-4 w-full">
				<div
					className="w-full min-h-[27rem] max-h-[27.5rem] max-w-[33rem]"
					style={{
						backgroundImage: `url(${peopleReading.src})`,
						backgroundOrigin: "border-box",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundSize: "contain",
					}}
				/>
				<div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
					<p className="text-[1.25rem] md:text-[2rem] font-bold">
						Judging Criteria <br />
						<span className="text-purple">Key attributes</span>
					</p>
					<div className="flex flex-col items-center md:items-start gap-4">
						{section3Data.map((data: any) => (
							<div key={data.key}>
								<span className="text-pink text-[1rem]">
									{data.key}: &nbsp;
								</span>
								<span className="text-[0.875rem]">{data.value}</span>
							</div>
						))}
						<Button btnValue="Read More" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section3;
