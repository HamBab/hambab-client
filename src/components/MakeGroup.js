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
    GroupOption,

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
        <GroupOption>
            <MkGroupButton onClick={console.log("그룹 생성")}>
                <button type="submit">그룹 개설하기</button>
            </MkGroupButton>
            <Info>
                <InfoHeader style={{ gridTemplateColumns: "3fr" }}>
                        그룹 개설 안내
                </InfoHeader>
                <InfoBody  style={{ gridTemplateColumns: "3fr" }}>
                    <ul>
                        <li>
                            그룹 개설 시 구성원들 간 예의를 지켜주세요.
                        </li>
                        <li>
                            비정상적인 활동으로 인한 신고 접수 시 활동에 제재가 있을 수 있습니다.
                        </li>
                        <li>구성원들끼리 원활한 소통으로 행복한 함밥 생활을 즐겨주세요.</li>
                    </ul>
                </InfoBody>
            </Info>
        </GroupOption>
    )
}
const MakeGroup = () => {
    const RestName = "도란도란";
    const RestCategory = "한식";
    const RestAddress = "서울특별시 동대문구";
    const RestNumber = "02-123-4567";
    return (
        <Content>
            <Main>
                <Details name={RestName} category={RestCategory} address={RestAddress} number={RestNumber}></Details>
                <Groups groupname="그룹명그룹명"></Groups>
            </Main>
        </Content>
    )
}
export default MakeGroup;
