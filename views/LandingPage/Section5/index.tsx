"use client";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

interface ITimeline {
	heading1: string;
	paragraph: string;
	heading2: string;
	position: string;
}

const sectionTimeline: ITimeline[] = [
	{
		heading1: "Hackathon Announcement",
		paragraph:
			"The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
		heading2: "November 18, 2023",
		position: "left",
	},
	{
		heading1: "Teams Registration begins",
		paragraph:
			"Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
		heading2: "November 18, 2023",
		position: "right",
	},
	{
		heading1: "Teams Registration ends",
		paragraph: "Interested Participants are no longer allowed to register",
		heading2: "November 18, 2023",
		position: "left",
	},
	{
		heading1: "Announcement of the accepted teams and ideas",
		paragraph:
			"All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
		heading2: "November 18, 2023",
		position: "right",
	},
	{
		heading1: "Getlinked Hackathon 1.0 Offically Begins",
		paragraph:
			"Accepted teams can now proceed to build their ground breaking skill driven solutions",
		heading2: "November 18, 2023",
		position: "left",
	},
	{
		heading1: "Demo Day",
		paragraph:
			"Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
		heading2: "November 18, 2023",
		position: "right",
	},
];

const Section5 = () => {
	return (
		<section
			id="timeline"
			className="w-full flex border-b border-b-grey min-h-screen text-white mx-auto max-w-[100rem] py-0 md:py-6"
		>
			<div className="flex flex-col items-center gap-8 p-4 w-full">
				<div className="flex flex-col items-center justify-center text-center w-full max-w-[22rem] mx-auto">
					<span className="text-[1.25rem] md:text-[2rem] font-bold">
						Timeline
					</span>
					<span className="text-[0.875rem] font-normal">
						Here is the breakdown of the time we anticipate using for the
						upcoming event.
					</span>
				</div>
				<div className="hidden md:block w-full max-w-[75rem] mx-auto">
					{sectionTimeline.map((timeline: any, index: number) => (
						<Timeline
							position="alternate"
							key={timeline.heading1}
							className="w-full"
						>
							{timeline.position === "left" ? (
								<TimelineItem>
									<TimelineContent sx={{ m: "auto 0", textAlign: "right" }}>
										<Typography
											variant="h6"
											component="span"
											className="text-[1.5rem] text-purple font-bold"
										>
											{timeline.heading1}
										</Typography>
										<Typography className="text-[0.875rem] font-normal">
											{timeline.paragraph}
										</Typography>
									</TimelineContent>
									<TimelineSeparator>
										<TimelineConnector className="bg-gradient-to-r from-blue to-purple min-h-[3rem] w-full max-w-[4px]" />
										<TimelineDot
											className="bg-gradient-to-r from-blue to-purple"
											sx={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												width: "50px",
												height: "50px",
											}}
										>
											{index + 1}
										</TimelineDot>
									</TimelineSeparator>
									<TimelineOppositeContent
										sx={{ m: "auto 0", textAlign: "left" }}
										className="text-[1.5rem] text-purple font-bold"
									>
										{timeline.heading2}
									</TimelineOppositeContent>
								</TimelineItem>
							) : (
								<TimelineItem>
									<TimelineOppositeContent
										sx={{ m: "auto 0" }}
										align="right"
										className="text-[1.5rem] text-purple font-bold"
									>
										{timeline.heading2}
									</TimelineOppositeContent>
									<TimelineSeparator>
										<TimelineConnector className="bg-gradient-to-r from-blue to-purple min-h-[3rem] w-full max-w-[4px]" />
										<TimelineDot
											className="bg-gradient-to-r from-blue to-purple"
											sx={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												width: "50px",
												height: "50px",
											}}
										>
											{index + 1}
										</TimelineDot>
									</TimelineSeparator>
									<TimelineContent sx={{ m: "auto 0", textAlign: "left" }}>
										<Typography
											variant="h6"
											component="span"
											className="text-[1.5rem] text-purple font-bold"
										>
											{timeline.heading1}
										</Typography>
										<Typography className="text-[0.875rem] font-normal">
											{timeline.paragraph}
										</Typography>
									</TimelineContent>
								</TimelineItem>
							)}
						</Timeline>
					))}
				</div>
			</div>
		</section>
	);
};

export default Section5;
