import { Card, CardBody } from "@heroui/react";

type SkillCardProps = {
	icon: string;
	title: string;
	alt?: string;
};

const SkillCard = (props: SkillCardProps) => {
	return (
		<Card className="flex flex-row w-45 h-50 m-4" isHoverable>
			<CardBody>
				<img
					src={props.icon}
					alt={props.alt ?? props.title}
					className="w-25 mx-auto"
				/>
				<p className="text-center mt-4 font-semibold text-lg">
					{props.title}
				</p>
			</CardBody>
		</Card>
	);
};

export default SkillCard;
