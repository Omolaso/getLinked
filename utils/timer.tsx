import Countdown from "react-countdown";

interface ITimerProp {
	count?: number;
	hours?: number;
	minutes?: number;
	seconds?: number;
	completed?: boolean;
}

const renderer = ({ hours, minutes, seconds, completed }: ITimerProp) => {
	if (completed) {
		return (
			<span className="text-[3rem] lg:text-[4rem] font-normal">
				{hours}
				<small className="text-[0.875rem] font-normal">H</small> {minutes}
				<small className="text-[0.875rem] font-normal">M</small> {seconds}
				<small className="text-[0.875rem] font-normal">S</small>
			</span>
		);
	} else {
		return (
			<span className="text-[3rem] lg:text-[4rem] font-normal">
				{hours}
				<small className="text-[0.875rem] font-normal">H</small> {minutes}
				<small className="text-[0.875rem] font-normal">M</small> {seconds}
				<small className="text-[0.875rem] font-normal">S</small>
			</span>
		);
	}
};

const Timer = ({ count }: ITimerProp) => {
	return <Countdown date={Date.now() + count!} renderer={renderer} autoStart={true} />;
};

export default Timer;
