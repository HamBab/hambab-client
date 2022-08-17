import React from "react";
import {
	ResItem,
	IndexDiv,
	NameDiv,
	AddressDiv,
	CategoryDiv,
	NumberDiv,
} from "./styledComponent";

const Restaurant = ({ id, name, address, category, number }) => {
	return (
		<ResItem>
			<IndexDiv>{id}</IndexDiv>
			<NameDiv>{name}</NameDiv>
			<AddressDiv>{address}</AddressDiv>
			<CategoryDiv>{category}</CategoryDiv>
			<NumberDiv>{number}</NumberDiv>
		</ResItem>
	);
};

export default Restaurant;
