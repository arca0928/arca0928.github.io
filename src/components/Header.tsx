import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
	return (
		<Navbar
			classNames={{
				item: ["flex", "relative", "h-full", "items-center"],
			}}
			isBordered
			shouldBlockScroll
		>
			<NavbarContent justify="start">
				<NavbarBrand>
					<Link className="font-inter font-bold" href="/">
						arca's Portfolio
					</Link>
				</NavbarBrand>
				<NavbarContent className="sm:flex gap-5">
					<NavbarItem>
						<Link href="#about">About</Link>
					</NavbarItem>
					<NavbarItem>
						<Link href="#works">Works</Link>
					</NavbarItem>
					<NavbarItem>
						<Link href="#skills">Skills</Link>
					</NavbarItem>
					<NavbarItem>
						<Link href="#contact">Contact</Link>
					</NavbarItem>
				</NavbarContent>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<Link href="https://github.com/arca0928">
						<FaGithub />
					</Link>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default Header;
