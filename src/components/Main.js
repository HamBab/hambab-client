import React from "react";
import {
	MainSection,
	MenuDiv,
	CategoryItem,
	SearchForm,
	Up,
	Down,
} from "./styledComponent";
import "./Navbar.css";
import kor from "../images/한식.png";
import asia from "../images/아시아.png";
import west from "../images/양식.png";
import japan from "../images/일식.png";
import china from "../images/중식.png";
import cafe from "../images/카페2.png";
import fast from "../images/패스트푸드.png";
import etc from "../images/기타.png";
import { useNavigate } from "react-router-dom";

const Main = ({ onSelect }) => {
	const navigate = useNavigate();
	const goList = (c) => {
		navigate(`/restaurants/${c}`);
	};

	return (
		<MainSection>
			<SearchForm></SearchForm>
			<MenuDiv>
				<Up>
					<CategoryItem
						onClick={() => {
							goList("kor");
							onSelect("M");
						}}
					>
						<img src={kor} alt="logo" width={60}></img>
						<div>한식</div>
					</CategoryItem>
					<CategoryItem
						onClick={() => {
							goList("west");
							onSelect("M");
						}}
					>
						<img src={west} alt="logo" width={60}></img>
						<div>양식</div>
					</CategoryItem>
					<CategoryItem
						onClick={() => {
							goList("japan");
							onSelect("M");
						}}
					>
						<img src={japan} alt="logo" width={60}></img>
						<div>일식</div>
					</CategoryItem>
					<CategoryItem
						onClick={() => {
							goList("china");
							onSelect("M");
						}}
					>
						<img src={china} alt="logo" width={60}></img>
						<div>중식</div>
					</CategoryItem>
				</Up>
				<Down>
					<CategoryItem
						onClick={() => {
							goList("asia");
							onSelect("M");
						}}
					>
						<img src={asia} alt="logo" width={60}></img>
						<div>아시아</div>
					</CategoryItem>
					<CategoryItem
						onClick={() => {
							goList("fastfood");
							onSelect("M");
						}}
					>
						<img src={fast} alt="logo" width={60}></img>
						<div>패스트푸드</div>
					</CategoryItem>
					<CategoryItem
						onClick={() => {
							goList("cafe");
							onSelect("M");
						}}
					>
						<img src={cafe} alt="logo" width={60}></img>
						<div>카페</div>
					</CategoryItem>
					<CategoryItem
						onClick={() => {
							goList("etc");
							onSelect("HOME");
						}}
					>
						<img src={etc} alt="logo" width={60}></img>
						<div>기타</div>
					</CategoryItem>
				</Down>
			</MenuDiv>
		</MainSection>
	);
};

export default Main;
