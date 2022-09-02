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
    Tags
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
        <div className="frame-27">
            <div className="button">
                <div className="-----2">
                    그룹 개설하기
                </div>
            </div>
            <div className="groups">
                <div className="header">
                    <div className="frame-33">
                        <div className="frame-332">
                            <div className="---2">
                                그룹 구성 안내
                            </div>
                        </div>
                        <div className="frame-34">
                            <div className="----">
                                모집인원
                            </div>
                        </div>
                        <div className="frame-35">
                            <div className="----2">
                                진행상태
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frame-37">
                    <div className="frame-332">
                        <div className="---------">
                            {props.groupname}
                        </div>
                    </div>
                    <div className="frame-34">
                        <div className="_1-3">
                            1/3
                        </div>
                    </div>
                    <div className="frame-35">
                        <div className="---3">
                            모집중
                        </div>
                    </div>
                </div>
                <div className="frame-342">
                    <div className="frame-332">
                        <div className="---4">
                            모임명
                        </div>
                    </div>
                    <div className="frame-34">
                        <div className="_1-3">
                            1/3
                        </div>
                    </div>
                    <div className="frame-35">
                        <div className="---3">
                            모집중
                        </div>
                    </div>
                </div>
                <div className="frame-352">
                    <div className="frame-332">
                        <div className="---------">
                            같이 저녁 먹어요
                        </div>
                    </div>
                    <div className="frame-34">
                        <div className="_1-3">
                            1/3
                        </div>
                    </div>
                    <div className="frame-35">
                        <div className="----3">
                            모집완료
                        </div>
                    </div>
                </div>
                <div className="frame-36">
                    <div className="frame-332">
                        <div className="---------">
                            같이 저녁 먹어요
                        </div>
                    </div>
                    <div className="frame-34">
                        <div className="_1-3">
                            1/3
                        </div>
                    </div>
                    <div className="frame-35">
                        <div className="----3">
                            모집완료
                        </div>
                    </div>
                </div>
                <div className="frame-36">
                    <div className="frame-332">
                        <div className="---------">
                            같이 저녁 먹어요
                        </div>
                    </div>
                    <div className="frame-34">
                        <div className="_1-3">
                            1/3
                        </div>
                    </div>
                    <div className="frame-35">
                        <div className="----3">
                            모집완료
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
