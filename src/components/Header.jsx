import React, { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import {
	Navbar,
	MenuItem,
	HeaderSection,
	LogoDiv,
	SearchDiv,
	LogoAndSearchDiv,
	Wrap,
	SearchIcon,
} from "./styledComponent";

const Header = () => {
	const [location, setLocation] = useState("HOME");
	const onSelect = useCallback((category) => setLocation(category));

	const category = [
		{ text: "HOME" },
		{ text: "CHAT" },
		{ text: "MYPAGE" },
		{ text: "LOGIN" },
		{ text: "ABOUTUS" },
	];
	return (
		<Wrap>
			<LogoAndSearchDiv>
				{location !== "HOME" ? (
					<>
						<LogoDiv>
							<img src="images/LOGO.png" />
						</LogoDiv>
						<SearchDiv>
							<input />
						</SearchDiv>
						<SearchIcon>
							<img src="images/돋보기.png" />
						</SearchIcon>
					</>
				) : (
					""
				)}
			</LogoAndSearchDiv>

			<Navbar>
				{category.map((c, idx) => (
					<MenuItem
						key={idx}
						active={location === c.text}
						onClick={() => onSelect(c.text)}
					>
						{c.text}
					</MenuItem>
				))}
			</Navbar>
			<Outlet />
		</Wrap>
	);
};

export default Header;
