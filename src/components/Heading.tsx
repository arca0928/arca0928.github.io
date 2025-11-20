import type React from "react";

type HeadingProps = {
	id: string;
	children: React.ReactNode;
};

const Heading = (props: HeadingProps) => {
	return (
		<p id={props.id} className="block pt-20 mt--20 text-3xl font-bold">
			{props.children}
		</p>
	);
};

export default Heading;
