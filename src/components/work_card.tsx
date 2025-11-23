import { Button, Card, CardBody, CardFooter, Image } from "@heroui/react";

type WorkCardProps = {
	title: string;
	description: string;
	imageUrl: string;
	repoLink?: string;
	altText?: string;
	width?: number;
	height?: number;
};

const WorkCard = (props: WorkCardProps) => {
	return (
		<Card className="flex flex-row flex-wrap w-110 m-5">
			<div className="w-full items-center justify-center flex aspect-video">
				<img
					src={props.imageUrl}
					alt={props.altText ?? props.title}
					title={props.title}
					className="w-full object-contain"
					width={props.width}
					height={props.height}
				/>
			</div>
			<CardBody>
				<p className="text-xl font-bold mb-2">{props.title}</p>
				<p className="text-medium">{props.description}</p>
			</CardBody>
			{props.repoLink ? (
				<CardFooter>
					<a
						href={props.repoLink}
						target="_blank"
						rel="noopener noreferrer"
						className="mx-auto"
					>
						<Button startContent={<span className="icon-[mdi--github]" />}>
							View in Github
						</Button>
					</a>
				</CardFooter>
			) : undefined}
		</Card>
	);
};

export default WorkCard;
