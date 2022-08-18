import React from "react";
import { useParams } from "react-router-dom";
import Restaurant from "./Restaurant";
import Page from "./Page";
import {
	RestaurantsSection,
	IndexDiv,
	NameDiv,
	AddressDiv,
	CategoryDiv,
	NumberDiv,
	FieldSection,
	Wrap,
} from "./styledComponent";

const RestaurantList = () => {
	const category = useParams().category;
	// const getRestaurants 함수

	const sample = [
		{
			id: 1,
			name: "도란도란",
			address: "식당주소",
			category: "한식",
			number: "02-2342-2345",
		},
		{
			id: 2,
			name: "식당2",
			address: "식당주소",
			category: "한식",
			number: "070",
		},
		{
			id: 3,
			name: "식당3",
			address: "식당주소",
			category: "한식",
			number: "070",
		},
		{
			id: 4,
			name: "식당4",
			address: "식당주소",
			category: "한식",
			number: "070",
		},
		{
			id: 5,
			name: "식당5",
			address: "식당주소",
			category: "한식",
			number: "070",
		},
	];
	return (
		<Wrap>
			<RestaurantsSection>
				<FieldSection>
					<IndexDiv style={{ fontWeight: "bold" }}>인덱스</IndexDiv>
					<NameDiv style={{ fontWeight: "bold" }}>이름</NameDiv>
					<AddressDiv style={{ fontWeight: "bold" }}>주소</AddressDiv>
					<CategoryDiv style={{ fontWeight: "bold" }}>카테고리</CategoryDiv>
					<NumberDiv style={{ fontWeight: "bold" }}>전화번호</NumberDiv>
				</FieldSection>

				{sample.map((r) => (
					<div key={r.id}>
						<hr style={{ width: "60rem", marginLeft: "4rem" }} />
						<Restaurant
							id={r.id}
							name={r.name}
							address={r.address}
							category={r.category}
							number={r.number}
						/>
					</div>
				))}
				<hr style={{ width: "60rem", marginLeft: "4rem" }} />
				<Page />
			</RestaurantsSection>
		</Wrap>
	);
};

export default RestaurantList;
