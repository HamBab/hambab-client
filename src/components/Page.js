import React, { useState } from "react";
import { PageArrowDiv, PagenumberDiv, PagingSection } from "./styledComponent";

const Page = () => {
	const [page, setPage] = useState(1);
	const [pages, setPages] = useState([1, 2, 3, 4, 5]);

	return (
		<PagingSection>
			<PageArrowDiv>
				<button
					onClick={() => {
						if (page > 1) {
							setPage(page - 1);
						}
					}}
				>
					〈 Prev
				</button>
			</PageArrowDiv>
			{pages.map((pageNum) => (
				<PagenumberDiv
					key={pageNum}
					onClick={() => setPage(pageNum)}
					style={{
						borderStyle: pageNum === page ? "solid" : "None",
						// borderRadius: pageNum === page ? "50%" : "",
						border: pageNum === page ? "None" : "",
						backgroundColor: pageNum === page ? "#d3d3d3" : "",
						color: pageNum === page ? "white" : "",
					}}
				>
					{pageNum}
				</PagenumberDiv>
			))}
			<PageArrowDiv>
				<button
					onClick={() => {
						if (pages.length > page) {
							setPage(page + 1);
						}
					}}
				>
					Next 〉
				</button>
			</PageArrowDiv>
		</PagingSection>
	);
};

export default Page;
