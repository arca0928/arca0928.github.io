import type React from "react";

type HeadingProps = {
	id?: string;
	size?: "large" | "medium" | "small";
	children: React.ReactNode;
};

const Heading = (props: HeadingProps) => {
	return (
		<p
			id={props.id}
			className={`																								block pt-20 mt--20 font-bold mb-4
                ${props.size === "medium" ? "text-3xl" : props.size === "small" ? "text-2xl" : "text-4xl"}`}
		>
			{props.children}
		</p>
	);
};

export default Heading;
