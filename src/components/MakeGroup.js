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
                    <label>
                    <i class="fa-solid fa-quote-left"></i> 그룹명
                        <p><input type="text" placeholder="그룹명을 입력해주세요."></input>
                        </p>
                    </label>
                </Item>
            </LItem>
            <RItem>
                <Item>
                    <label>
                    <i class="fa-regular fa-calendar-days"></i> 날짜 선택
                        <p><input type="date"></input></p>
                    </label>
                </Item>
            </RItem>
            <LItem>
                <Item>
                    <label>
                    <i class="fa-solid fa-users"></i> 희망 인원
                        <p><input type="number" min={1}></input></p>
                    </label>
                </Item>
            </LItem>
            <RItem>
                <Item>
                    <label>
                    <i class="fa-solid fa-clock"></i> 시간 선택
                        <p><input type="time" style={{width:'90px'}}></input> ~ <input type="time"style={{width:'90px'}}></input></p>
                    </label>
                </Item>
            </RItem>
            <FullItem>
                <Item>
                    <label>
                    <i class="fa-solid fa-tags"></i> 조건 설정
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
                    </label>
                </Item>
            </FullItem>
            <FullItem>
                <Item>
                    <label>
                    <i class="fa-solid fa-pen-fancy"></i> 상세 설명<br></br>
                        <textarea placeholder="상세 설명을 입력해주세요."></textarea>
                    </label>
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
