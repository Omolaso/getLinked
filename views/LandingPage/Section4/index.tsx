import manThinking from "@/public/ManThinking.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Section4 = () => {
	return (
		<section className="w-full flex border-b border-b-grey min-h-screen text-white mx-auto max-w-[100rem]">
			<div className="flex flex-col md:flex-row items-center justify-between p-4 w-full">
				<div className="flex flex-col items-center md:items-start gap-4">
					<div className="flex flex-col items-center md:items-start gap-2 w-full max-w-[21.2rem]">
						<p className="text-[1.25rem] md:text-[2rem] font-bold leading-10">
							Frequently Asked <br />
							<span className="text-purple">Questions</span>
						</p>
						<span className="text-[0.875rem]">
							We got answers to the questions that you might want to ask about
							getlinked Hackathon 1.0
						</span>
					</div>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography>Accordion 1</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
								eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
				<div
					className="w-full min-h-[27rem] max-h-[27.5rem] max-w-[33rem]"
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
