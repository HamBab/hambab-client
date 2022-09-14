import { React, useState } from "react";
import { 
    Content,
    Main,
    MainContents,
    Item, 
    LItem,
    RItem,
    FullItem,
    Tag,
    Tags,
    MkGroupButton,
    Info,
    InfoHeader,
    InfoBody,
    Tab1,
    Tab2,
    Tab3,
    GroupMember,

} from "./styledComponent";

// 그룹 개설 페이지
const Details = (props) => {
    return (
        <MainContents>
            <header>
                <h2>{props.name}</h2>
            </header>
            <LItem>
                <Item>
                    🗂 그룹명
                    <p><input type="text"></input>
                    </p>
                </Item>
            </LItem>
            <RItem>
                <Item>
                    📍 날짜 선택
                    <p><input type="date"></input></p>
                </Item>
            </RItem>
            <LItem>
                <Item>
                    👥 희망 인원
                    <p><input type="number" min={1}></input></p>
                </Item>
            </LItem>
            <RItem>
                <Item>
                    ⏰ 시간 선택
                    <p><input type="time" style={{width:'90px'}}></input> ~ <input type="time"style={{width:'90px'}}></input></p>
                </Item>
            </RItem>
            <FullItem>
                <Item>
                    🏷 조건 설정
                    <p><Tags>
                            <Tag>#10대</Tag>
                            <Tag>#20대</Tag>
                            <Tag>#30대</Tag>
                            <Tag>#40대</Tag>
                            <Tag>#50대</Tag>
                            <Tag>#60대 이상</Tag>
                            <Tag>#연령무관</Tag>
                        </Tags>
                    </p>
                </Item>
            </FullItem>
            <FullItem>
                <Item>
                    ✒️ 상세 설명<br></br>
                    <textarea></textarea>
                </Item>
            </FullItem>
            </MainContents>
    )
}

const Groups = (props) => {
    return (
        <GroupMember>
            <MkGroupButton onClick={console.log("그룹 생성")}>
                <button type="submit">그룹 개설하기</button>
            </MkGroupButton>
            <MkGroupButton className="group-edit" onClick={console.log("그룹 수정")}>
                <button type="submit">그룹 수정하기</button>
            </MkGroupButton>
            <Info className="info-member">
                <InfoHeader style={{ gridTemplateColumns: "3fr" }}>
                        그룹원 정보
                </InfoHeader>
                <InfoBody  style={{ gridTemplateColumns: "3fr" }} className="infobody-member">
                    <ul>
                        <li>
                            {props.user1}
                            <article>
                            <button>X</button>
                            </article>
                        </li>

                        <li>
                            {props.user2}
                            <article>
                            <button>X</button>
                            </article>
                        </li>

                        <li>
                            {props.user3}
                            <article>
                            <button>X</button>
                            </article>
                        </li>

                        <li>
                            {props.user4}
                            <article>
                            <button>X</button>
                            </article>
                        </li>

                    </ul>
                </InfoBody>
            </Info>
        </GroupMember>
    )
}
const EditGroup = () => {
    const RestName = "도란도란";
    const RestCategory = "한식";
    const RestAddress = "서울특별시 동대문구";
    const RestNumber = "02-123-4567";
    const User1 = "정수현"
    const User2 = "엄소현"
    const User3 = "양하연"
    const User4 = "김주연"
    
    return (
        <Content>
            <Main>
                <Details name={RestName} category={RestCategory} address={RestAddress} number={RestNumber}></Details>
                <Groups user1={User1} user2={User2} user3={User3} user4={User4}></Groups>
            </Main>
        </Content>
    )
}
export default EditGroup;
