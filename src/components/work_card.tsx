import { Button, Card, CardBody, CardFooter, Image } from "@heroui/react";

type WorkCardProps = {
	title: string;
	description: string;
	imageUrl: string;
	repoLink?: string;
	altText?: string;
};

const WorkCard = (props: WorkCardProps) => {
	return (
		<Card className="flex flex-row flex-wrap w-110 m-5">
			<div className="w-full items-center justify-center flex aspect-video">
				<img
					src={props.imageUrl}
					alt={props.altText ?? props.title}
					title={props.title}
					className="mx-auto max-w-full max-h-60 object-contain"
				/>
			</div>
			<CardBody>
				<p className="text-xl font-bold mb-2">{props.title}</p>
				<p className="text-medium">{props.description}</p>
			</CardBody>
			<CardFooter>
				{props.repoLink ? (
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
				) : undefined}
			</CardFooter>
		</Card>
	);
};

export default WorkCard;
