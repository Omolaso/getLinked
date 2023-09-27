"use client";

import LargeScreenTimeline from "./largeScreenTL";
import SmallScreenTimeline from "./smallScreenTL";
export interface ITimeline {
	heading1: string;
	paragraph: string;
	heading2: string;
}

export const sectionTimeline: ITimeline[] = [
	{
		heading1: "Hackathon Announcement",
		paragraph:
			"The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
		heading2: "November 18, 2023",
	},
	{
		heading1: "Teams Registration begins",
		paragraph:
			"Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
		heading2: "November 18, 2023",
	},
	{
		heading1: "Teams Registration ends",
		paragraph: "Interested Participants are no longer allowed to register",
		heading2: "November 18, 2023",
	},
	{
		heading1: "Announcement of the accepted teams and ideas",
		paragraph:
			"All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
		heading2: "November 18, 2023",
	},
	{
		heading1: "Getlinked Hackathon 1.0 Offically Begins",
		paragraph:
			"Accepted teams can now proceed to build their ground breaking skill driven solutions",
		heading2: "November 18, 2023",
	},
	{
		heading1: "Demo Day",
		paragraph:
			"Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
		heading2: "November 18, 2023",
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
				<div className="hidden lg:block w-full max-w-[80rem] mx-auto">
					<LargeScreenTimeline />
				</div>
				<div className="block lg:hidden w-full max-w-[80rem] mx-auto">
					<SmallScreenTimeline />
				</div>
			</div>
		</section>
	);
};

export default Section5;
