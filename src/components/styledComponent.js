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
		margin-top:30px;
		padding: 10px 5px 10px 5px;
	}
	#search {
		color: white;
		background-color: #19abbf;
		margin-top: 10px;
		padding: 5px 0 5px 0;
		
	}
	justify-content: center;
	align-item: center;
	display: grid;
	flex-direction: row;
	margin: 0px auto;
	padding-top: 10rem;
`;

export const MainSection = styled.div`
	background-color: rgba(229, 229, 229, 1);
	padding-bottom: 10rem;
	justify-contents: center;
`;
export const MenuDiv = styled.div`
	margin-top: 17rem;
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
	background-color: #ffffff;
	border-radius: 10px;
	width: 35rem;
	padding-top: 3rem;
	padding-bottom: 4rem;
	margin: 0 auto;
	text-align: center;
	margin-top: 8rem;
	box-shadow: 0 5px 18px -7px rgba(0,0,0,0.2);

	input {
		width: 18rem;
		height: 2.5rem;
		border: 2px solid #19abbf;
		border-radius: 20px;
		background-color: transparent;
		margin-top: 20px;
		padding-left: 1rem;
		content: "f0e0";
		font-family: "Font Awesome 5 Free"; 
	}
	h2 {
		color: #495057;
		padding-bottom: 2rem;
	}
	button {
		border-radius: 100px;
		&:hover {
			box-shadow: 0 0 0 2px #19abbf inset; 
			color: #19abbf;
			border-radius: 100px;
		}
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
	margin-top: 40px;
	background-color: #19abbf;
	color: #ffffff;
	border; none;
	border-radius: 100px;
`;

export const SignupButton = styled.div`
	padding-left: 8px;
	cursor: pointer;
	color: #495057;
`;

// signup
export const SignupSection = styled.div`

	background-color: #ffffff;
	border-radius: 10px;
	width: 35rem;
	padding-top: 3rem;
	padding-bottom: 4rem;
	margin: 0 auto;
	text-align: center;
	margin-top: 8rem;
	box-shadow: 0 5px 18px -7px rgba(0,0,0,0.2)

	margin-bottom: 8rem;

	input {
		width: 18rem;
		height: 2.5rem;
		border: 2px solid #19abbf;
		border-radius: 20px;
		background-color: transparent;
		margin-top: 20px;
		padding-left: 1rem;
	}
	h2 {
		color: #495057;
		padding-bottom: 2rem;
	}
	button {
		border-radius: 100px;
		&:hover {
			box-shadow: 0 0 0 2px #19abbf inset; 
			color: #19abbf;
			border-radius: 100px;
		}
	}
	#info__birth {
		width: 18rem;
		height: 2.5rem;
		display:grid;
		grid-auto-flow: column;
		margin-left: auto;
		margin-right: auto;
		gap: 20px;
	}
	#birth-year, #birth-month, #birth-day {
		border: 2px solid #19abbf;
		border-radius: 20px;
		margin-top: 20px;
		height: 2.5rem;
		padding-left: 1rem;
		// padding-right: 5px;
		// text-align: center;
		color: #6c757d;
	}
	#radio__sex {
		width: 18rem;
		height: 2.5rem;
		display:grid;
		grid-auto-flow: column;
		margin-top: 20px;
		margin-bottom: 4.5rem;
		margin-left: auto;
		margin-right: auto;
		// border: 2px solid #19abbf;
		// border-radius: 20px
	}
	#id_male, #id_female {
		display: grid;
		grid-auto-flow: row;
		text-align: center;
		color: #6c757d;
		input[type="radio"] {
			width: 1.5rem;
			justify-self: center;
		}
		input[type="radio"]:checked {
			accent-color: #19abbf;
		}
	}

`;
