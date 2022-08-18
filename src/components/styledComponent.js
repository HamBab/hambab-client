import styled, { css } from "styled-components";

// Main

export const SearchForm = styled.div`
	flex-shrink: 0;
	width: 400px;
	height: 40px;
	position: static;
	input {
		border: none;
		color: #818087;
	}
`;

export const MainSection = styled.div`
	background-color: rgba(229, 229, 229, 1);
	padding-bottom: 10rem;
`;
export const MenuDiv = styled.div`
	margin-top: 20rem;
`;

export const CategoryItem = styled.div`
	cursor: pointer;
	text-align: center;
	margin: 1rem;
	// background-color: green;
	div {
		margin-top: 0.5rem;
	}
`;

export const Group = styled.div`
	width: 18.16px;
	height: 18.16px;
	position: static;
`;

export const Group2 = styled.div`
	position: absolute;
	left: 716px;
	top: 20px;
	overflow: visible;
`;

export const Up = styled.div`
	justify-content: center;
	display: flex;
	flex-direction: row;
`;
export const Down = styled.div`
	justify-content: center;
	display: flex;
	flex-direction: row;
`;

// 식당 리스트

export const RestaurantsSection = styled.div`
	background-color: white;
	text-align: center;
	width: 68rem;
	height: 45rem;
	margin: 0 auto;
	margin-top: 14rem;
	padding-top: 5rem;
	border-radius: 0.7rem;
`;

export const IndexDiv = styled.div`
	// background-color: yellow;
	margin-left: 5rem;
	width: 4rem;
	font-size: 13pt;
`;

export const NameDiv = styled.div`
	// background-color: orange;
	width: 11rem;
	font-size: 13pt;
`;

export const AddressDiv = styled.div`
	// background-color: blue;
	width: 24rem;
	font-size: 13pt;
`;

export const CategoryDiv = styled.div`
	// background-color: pink;
	width: 10rem;
	font-size: 13pt;
`;

export const NumberDiv = styled.div`
	// background-color: orange;
	width: 14rem;
	font-size: 13pt;
	margin-right: 3rem;
`;

export const FieldSection = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 13pt;
	margin-bottom: 3rem;
`;

export const ResItem = styled.div`
	// background-color: red;
	line-height: 2rem;
	display: flex;
	flex-direction: row;
	margin-top: 1rem;
	height: 2.5rem;
	vertical-align: middle;
`;

export const Wrap = styled.div`
	background-color: rgba(229, 229, 229, 1);
	height: 50rem;
`;

// 페이지네이션
export const PagenumberDiv = styled.div`
	// background-color: red;
	margin: 0 auto;
	width: 28px;
	height: 28px;
	text-align: center;
	line-height: 28px;
	cursor: pointer;

	&:hover {
		opacity: 0.6;
	}
`;

export const PageArrowDiv = styled.div`
	cursor: pointer;
	&:hover {
		opacity: 0.6;
	}
`;

export const PagingSection = styled.div`
	margin: 0 auto;
	padding-top: 6rem;
	width: 21rem;
	display: flex;

	button {
		background-color: transparent;
		border: none;
	}
`;

// login
export const LoginSection = styled.div`
	// background-color: red;
	border: 2px solid #dee2e6;
	width: 30rem;
	padding-top: 3rem;
	padding-bottom: 4rem;
	margin: 0 auto;
	text-align: center;
	margin-top: 8rem;

	input {
		width: 20rem;
		height: 3rem;
		border-width: 0px 0px 4px 0px;
		border-color: #ced4da;
		background-color: transparent;
		margin-top: 30px;
		padding-left: 0.3rem;
	}

	h1 {
		color: #495057;
	}
`;

export const LoginText = styled.h1`
	font-size: 12pt;
	width: 20rem;
	margin: 0 auto;
	display: flex;
	margin-top: 10px;
`;

export const ButtonDiv = styled.div`
	width: 20rem;
	margin: 0 auto;
	margin-top: 50px;
`;

export const SignupButton = styled.div`
	padding-left: 8px;
	cursor: pointer;
	color: #495057;
`;
