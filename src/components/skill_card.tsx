import { Card, CardBody } from "@heroui/react";

type SkillCardProps = {
	icon: string;
	title: string;
	alt?: string;
};

const SkillCard = (props: SkillCardProps) => {
	return (
		<Card
			className="flex flex-row w-41 h-48 m-5 md:m-4 md:w-33 md:h-40 grow"
			isHoverable
		>
			<CardBody>
				<div className="w-25 h-25 mx-auto flex items-center justify-center">
					<img
						src={props.icon}
						alt={props.alt ?? props.title}
						className="max-w-full max-h-full object-contain"
					/>
				</div>
				<p className="text-center mt-4 font-semibold text-lg">{props.title}</p>
			</CardBody>
		</Card>
	);
};

export default SkillCard;
