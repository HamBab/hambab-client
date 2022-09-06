import styled, { css } from "styled-components";

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
	font: 500 16px "Inter";
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
	text-align: center;
	justify-self: center;
`;
export const RItem = styled.div`
	text-align: center;
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
	display: grid;
	flex-direction: column;
	grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const ChatSection = styled.div`
	border-radius: 0.5rem;
	border: solid grey;
	width: 650px;
	height: 550px;
	h2 {
		margin-top: 1rem;
		text-align: center;
	}
`;

export const ChatItem = styled.div`
	margin: 0 auto;
	// background-color: blue;
	width: 550px;
	img {
		margin-left: 0.3rem;
		margin-top: 1rem;
		margin-right: 0.5rem;
	}
`;

export const ChatContent = styled.div`
	background-color: grey;
	border-radius: 0.5rem;
	padding: 0.5rem;
	height: 5rem;
	width: 450px;
	margin-left: 60px;
`;

export const SendChat = styled.div`
	margin-top: 16rem;
	input {
		margin-left: 1.5rem;
		width: 30rem;
		height: 4rem;
	}
	button {
		width: 7rem;
		height: 4rem;
		margin-left: 0.5rem;
		background-color: grey;
		color: white;
	}
`;
