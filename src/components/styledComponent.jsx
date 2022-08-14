import styled, { css } from "styled-components";

// Header
export const Wrap = styled.div`
	background-color: #e9ecef;
	height: 100vh;
	background-size: cover;
`;

export const Navbar = styled.div`
	background-color: #e9ecef;
	float: right;
	padding-top: 5.3rem;
	height: 8rem;
	margin-right: 1rem;
`;

export const MenuItem = styled.div`
	font-size: 14pt;
	font-family: "Happiness-Sans-Regular";
	cursor: pointer;
	margin-right: 1.5rem;
	display: inline-block;
	&:hover {
		color: #495057;
	}
	${(props) =>
		props.active &&
		css`
			color: #868e90;
			&:hover {
				color: #adb5bd;
			}
		`}
`;

export const LogoDiv = styled.div`
	margin-left: 2rem;
	display: inline-block;
	img {
		width: 8rem;
	}
`;

export const SearchDiv = styled.div`
	display: inline-block;
	margin-left: 8rem;
	margin-top: 4rem;

	input {
		width: 30rem;
		height: 3.5rem;
		border-radius: 1rem;
		padding-left: 17px;
		font-size: 11pt;
		border: none;
	}
`;

export const SearchIcon = styled.div`
	display: inline-block;
	position: absolute;
	margin-top: 4.3rem;
	margin-left: 0.3rem;

	img {
		width: 3rem;
		background-color: #19abbf;
		padding: 0.5rem;
		border-radius: 1rem;
	}
`;
export const LogoAndSearchDiv = styled.div`
	background-color: #e9ecef;
	height: 8rem;
	float: left;
`;
