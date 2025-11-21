type ContainerProps = {
	children: React.ReactNode;
};

const Container = (props: ContainerProps) => {
	return (
		<div className="mx-auto max-w-5xl w-full px-6 flex flex-col">
			{props.children}
		</div>
	);
};

export default Container;
