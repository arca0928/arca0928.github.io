import { Divider } from "@heroui/react";

const Footer = () => {
	return (
		<div className="flex flex-col w-full mt-auto bg-[oklch(0.3346 0 247.84)]">
			<Divider />
			<footer>
				<p className="text-center text-primary text-sm my-2">
					©2025 arca0928 All rights reserved.
				</p>
			</footer>
		</div>
	);
};

export default Footer;
