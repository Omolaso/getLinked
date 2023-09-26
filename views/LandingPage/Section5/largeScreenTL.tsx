import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { sectionTimeline, ITimeline } from "./";

import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";

const LargeScreenTimeline = () => {
	return (
		<>
			{sectionTimeline.map((timeline: ITimeline, index: number) => (
				<div key={timeline.heading1} className="w-full">
					{timeline.position === "left" ? (
						<Timeline position="alternate">
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
								<TimelineSeparator className="min-h-[3rem]">
									<TimelineConnector className="bg-gradient-to-r from-blue to-purple max-h-[3rem] w-full max-w-[4px]" />
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
						</Timeline>
					) : (
						<Timeline position="alternate">
							<TimelineItem>
								<TimelineOppositeContent
									sx={{ m: "auto 0" }}
									align="right"
									variant="body2"
									className="text-[1.5rem] text-purple font-bold"
								>
									{timeline.heading2}
								</TimelineOppositeContent>
								<TimelineSeparator className="min-h-[3rem]">
									<TimelineConnector className="bg-gradient-to-r from-blue to-purple w-full max-w-[4px]" />
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
								<TimelineContent sx={{ py: "12px", px: 2 }}>
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
						</Timeline>
					)}
				</div>
			))}
		</>
	);
};

export default LargeScreenTimeline;

// <TimelineItem>
// 	<TimelineOppositeContent
// 		sx={{ m: "auto 0" }}
// 		align="right"
// 		className="text-[1.5rem] text-purple font-bold"
// 	>
// 		{timeline.heading2}
// 	</TimelineOppositeContent>
// 	<TimelineSeparator>
// 		<TimelineConnector className="bg-gradient-to-r from-blue to-purple min-h-[3rem] w-full max-w-[4px]" />
// 		<TimelineDot
// 	className="bg-gradient-to-r from-blue to-purple"
// 	sx={{
// 		display: "flex",
// 		alignItems: "center",
// 		justifyContent: "center",
// 		width: "50px",
// 		height: "50px",
// 	}}
// >
// 	{index + 1}
// </TimelineDot>
// 	</TimelineSeparator>
// 	<TimelineContent sx={{ m: "auto 0", textAlign: "left" }}>
// 		<Typography
// 			variant="h6"
// 			component="span"
// 	className="text-[1.5rem] text-purple font-bold"
// >
// 	{timeline.heading1}
// 		</Typography>
// <Typography className="text-[0.875rem] font-normal">
// 	{timeline.paragraph}
// 		</Typography>
// 	</TimelineContent>
// </TimelineItem>
