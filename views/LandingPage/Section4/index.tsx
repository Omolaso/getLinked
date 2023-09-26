import manThinking from "@/public/ManThinking.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddSharpIcon from "@mui/icons-material/AddSharp";

interface IFAQ {
	question: string;
	answer: string;
}

const FAQs: IFAQ[] = [
	{
		question: "Can I work on a project I started before the hackathon?",
		answer: "Yes",
	},
	{
		question: "What happens if I need help during the hackathon?",
		answer: "You can reach out to your mentors",
	},
	{
		question: "What happens if I don't have an idea for a project?",
		answer: "We will provide one for you",
	},
	{
		question: "Can I join a team or do I have to come with one?",
		answer: "You can join a team",
	},
	{
		question: "What happens after the hackathon ends",
		answer: "You get your price",
	},
];

const Section4 = () => {
	return (
		<section
			id="faqs"
			className="w-full flex border-b border-b-grey min-h-screen text-white mx-auto max-w-[100rem]"
		>
			<div className="flex flex-col md:flex-row items-center justify-between gap-8 p-4 w-full">
				<div className="flex flex-col items-center md:items-start gap-4">
					<div className="flex flex-col items-center md:items-start gap-2 w-full max-w-[21.2rem]">
						<p className="text-center md:text-left text-[1.25rem] md:text-[2rem] font-bold leading-6 md:leading-10">
							Frequently Asked <br />
							<span className="text-purple">Questions</span>
						</p>
						<span className="text-center md:text-left text-[0.875rem]">
							We got answers to the questions that you might want to ask about
							getlinked Hackathon 1.0
						</span>
					</div>
					<div className="w-full flex flex-col gap-2 md:gap-4 max-w-[27rem]">
						{FAQs.map((faq: any) => (
							<Accordion
								key={faq.question}
								sx={{
									width: "100%",
									border: "none",
									borderBottom: "1px solid #D434FE",
									background: "none",
								}}
							>
								<AccordionSummary
									sx={{ boxShadow: "none" }}
									expandIcon={
										<AddSharpIcon
											sx={{
												color: "#D434FE",
											}}
										/>
									}
								>
									<Typography
										sx={{ color: "#fff", fontSize: "14px", textAlign: "left" }}
									>
										{faq.question}
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography sx={{ color: "#fff", fontSize: "14px" }}>
										{faq.answer}
									</Typography>
								</AccordionDetails>
							</Accordion>
						))}
					</div>
				</div>
				<div
					className="w-full min-h-[25rem] md:min-h-[45rem] max-h-[50.3rem] max-w-[25rem] md:max-w-[46.3rem]"
					style={{
						backgroundImage: `url(${manThinking.src})`,
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

export default Section4;
