import styled, { css } from "styled-components";
import hambabimg from "../images/hambabimg.png";

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
{
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

//MakeGoup
export const Content = styled.div`
	background-color: rgba(229, 229, 229, 1);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    text-align: center;
`;
export const Main = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 80px;

	position: absolute;
	width: 1180px;
	height: 550px;
	top: 10px;

	position: relative;
`;
export const MainContents = styled.div`
	header {
		color: #000000;
		display: block;
		grid-column: span 2;
		
	}
	background: #ffffff;
    border-radius: 10px;
    padding: 50px;
    display: grid;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 650px;
    height: 550px;
    position: relative;
	grid-template-columns: 1fr 1fr;
`;
export const Item = styled.div`
	color: #000000;
    text-align: center;
    font: 500 16px 'Inter';
	line-height: 1.6rem;
    // position: relative;
	// display: flex;
	align-items: flex-start;
    justify-content: flex-start;
	textarea {
		overflow-y: scroll;
		width: 450px;
		height: 100px;
		resize: none;
	}
	input {
		width: 200px;
		height: 25px;
	}
`;
export const LItem = styled.div`
	text-align:center;
	justify-self: center;	
`;
export const RItem = styled.div`
	text-align:center;
	justify-self: center;
`;
export const FullItem = styled.div`
	grid-column: span 2;
	justify-self: center;
`;
export const Tag = styled.div`
border: 1px solid black;
`;
export const Tags = styled.div`
	display:grid;
	flex-direction: column;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	
`;
export const MkGroupButton = styled.div`
	button {
		border: none;
		color: #ffffff;
		text-align: center;
		font: 400 24px 'Inter';
		position: relative;
		background-color: #19abbf;
		padding: 40px 0px 40px 0px;
		height: 80px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		&:hover {
			box-shadow: 0 0 0 3px #19abbf inset; 
			background-color: #ffffff;
			color: #19abbf;
		}
		
	}
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-self: stretch;
	height: 80px;

		&.group-edit {
			button {
				color: #ffffff;
				background-color: #818087;
				&:hover {
					color: #818087;
					box-shadow: 0 0 0 3px #818087 inset;
					background-color: #ffffff;
				}
		}
	}
`;
export const Info = styled.div`
	border-radius: 10px;
    border: solid #545454;
    border-width: 1px;
    padding: 10px 25px 10px 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
    align-self: stretch;
    flex-shrink: 0;
    height: 430px;
    position: relative;
    overflow: auto;

	&.info-member {
		height: 350px;	
	}
`;

export const InfoHeader = styled.div`
    display: grid;
	grid-template-columns: 1fr 1fr 1fr;
    gap: 0px;
    position: relative;

	border: solid #545454;
    border-width: 0px 0px 2px 0px;
    padding: 15px 0px 10px 0px;
    align-items: center;
    justify-content: center;
    width: -webkit-fill-available;

	// --2
	color: #000000;
    font: 700 16px 'Inter';
    position: relative;
	text-align: center;
`;

export const InfoBody = styled.div`
	// display: grid;
	// grid-template-columns: 1fr 1fr 1fr;
	gap: 0px;
    position: relative;
	padding: 0px 0px 10px 0px;
	align-items: center;
	justify-content: center;

	color: #000000;
    font: 400 16px 'Inter';
	width: -webkit-fill-available;
	text-align: center;
	ul {
		margin 70px;
	}
	li {
		margin-top: 20px;
		margin-bottom: 20px;
	}
	&.infobody-member{
		article {
			margin-left: 10px;
			display: inline-block;
			button {
				border-radius: 50px;
				border: none;
				color: #ffffff;
				background-color: #BD4747;
				font-size: 14px;
				vertical-align: text-top;
			}
		}
		ul {
			margin 20px;
		}
		li {
			margin-top: 20px;
			margin-bottom: 20px;
		}
	}
`;

export const Tab1 = styled.div`
	text-align: left;
`;

export const Tab2 = styled.div`
	text-align: center;
`;

export const Tab3 = styled.div`
	text-align: right;
`;
export const GroupElem = styled.div`
	border: solid #545454;
	border-width: 0px 0px 1px 0px;
	padding: 20px 0px 20px 0px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	width: -webkit-fill-available;
`;

export const RestaurantInfo = styled.div`
	display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 80px;

    position: absolute;
    width: 1180px;
    height: 550px;
    top: 10px;

    position: relative;
`;

export const GroupOption = styled.div
`
	display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 450px;
    height: 550px;
    position: relative;
`;

export const GroupMember = styled.div
`
	display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 450px;
	height: 550px;
    position: relative;
`;

// MyPage
export const MyPageSection = styled.div`
	background-color: #ffffff;
	border-radius: 10px;
	width: 35rem;
	padding-top: 3rem;
	padding-bottom: 4rem;
	margin: 0 auto;
	text-align: center;
	margin-top: 8rem;
	box-shadow: 0 5px 18px -7px rgba(0,0,0,0.2);

	// input {
	// 	width: 18rem;
	// 	height: 2.5rem;
	// 	border: 2px solid #19abbf;
	// 	border-radius: 20px;
	// 	background-color: transparent;
	// 	margin-top: 20px;
	// 	padding-left: 1rem;
	// 	content: "f0e0";
	// 	font-family: "Font Awesome 5 Free"; 
	// }
	h2 {
		color: #495057;
		padding-bottom: 2rem;
	}
`;

export const Profile = styled.div`
	height: 230px;
	line-height: 2rem;
	padding: 10px;
	background-image: url(${hambabimg});
	overflow: visible visible;
	background-size: 200px 200px;
	background-repeat: no-repeat;
	background-position: center;
	button {
		font-size: 16px;
		padding: 3px 10px;
		border-radius: 100px;
		border: none;
		background-color: rgb(239, 239, 239);
		border: 1px solid rgb(0,0,0, 0.15);
		color: rgb(118,118,118);

		&:hover {
			box-shadow: 0 0 0 1px #19abbf inset; 
			color: #19abbf;
			background-color: #ffffff;
			transition-duration: 0.3s;
		}
		position: relative;
		top: 200px;
	}
	h3 {
		font-size: 18px;
		position: relative;
		top: 130px;
		border: 2px dashed #ffffff;
		border-radius: 5px;
		display: inline-block;
		margin-block-end: 0;
		background-color: rgb(255,255, 255, 0.5);
		padding: 2px;
	}
`;

export const MyPageButtons=styled.div`
	position: static;
	button {
		width: 200px;
		height: 100px;
		margin: 15px;
		border-radius: 10px;
		border: 1px solid rgb(0,0,0, 0.15);
		color: #495057;
		box-shadow: 1px 1px 3px rgb(0,0,0, 0.08);
		i {
			display: block;
			font-size: 30px;
			color: inherit;
			margin-bottom: 2px;
			
		}
		&:hover {
			border: 1px solid #19abbf;
			color: #19abbf;
			transition-duration: 0.3s;
			background-color: white;
		}
	}
`;