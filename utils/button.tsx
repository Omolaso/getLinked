interface IProps {
	btnValue: string;
	onClick?: VoidFunction;
}

const Button = ({ btnValue, onClick }: IProps) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="min-h-[3rem] max-h-[3.5rem] w-full max-w-[9.5rem] md:max-w-[11rem] rounded-[0.25rem] text-[1rem] text-white bg-gradient-to-r from-purple to-blue active:scale-90 duration-500"
		>
			{btnValue}
		</button>
	);
};

export default Button;
