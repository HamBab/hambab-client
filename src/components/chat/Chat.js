import React, { useState } from "react";
import {
	MainContents,
	Item,
	LItem,
	RItem,
	FullItem,
	Tag,
	Tags,
	ChatItem,
	ChatSection,
	ChatContent,
	SendChat,
} from "./styledComponent";
import picon from "../../images/사람 아이콘.png";

const Chat = () => {
	return (
		<>
			<MainContents>
				<header>
					<h2>그룹 정보</h2>
				</header>
				<LItem>
					<Item>
						🗂 그룹명
						<p>sample</p>
					</Item>
				</LItem>
				<RItem>
					<Item>
						📍 날짜 선택
						<p>2022-09-03</p>
					</Item>
				</RItem>
				<LItem>
					<Item>
						👥 희망 인원
						<p>2</p>
					</Item>
				</LItem>
				<RItem>
					<Item>
						⏰ 시간 선택
						<p>18:00~18:30</p>
					</Item>
				</RItem>
				<FullItem>
					<Item>
						🏷 조건 설정
						<p>
							<Tags>
								<Tag>#20대</Tag>
								<Tag>#성별무관</Tag>
							</Tags>
						</p>
					</Item>
				</FullItem>
				<FullItem>
					<Item>
						✒️ 상세 설명<br></br>
						<p>같이 밥 먹어요 ~</p>
					</Item>
				</FullItem>
			</MainContents>
			<ChatSection>
				<h2>그룹 대화</h2>
				<ChatItem>
					<img src={picon} alt="사람" width={50}></img>
					익명이
					<ChatContent>내용</ChatContent>
				</ChatItem>
				<SendChat>
					<input type="text"></input>
					<button>전송</button>
				</SendChat>
			</ChatSection>
		</>
	);
};

export default Chat;
