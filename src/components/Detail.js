import React, { useState } from "react";
import Navbar from "./Navbar.js";

import { 
    MkGroupButton,
    Info,
    InfoHeader,
    InfoBody,
    Tab1,
    Tab2,
    Tab3,
    GroupElem,
    MainContents,
    Content,
    Main,
    Item,
    FullItem,
	GroupOption,
} from "./styledComponent";

const Detail = (props) => {
    return (
        <MainContents>
            <FullItem>
                <Item>
                    {props.name}
                </Item>
            </FullItem>
            <FullItem>
                <Item>
                    🗂 {props.category}
                </Item>
            </FullItem>
            <FullItem>
                <Item>
                    📍 {props.address}
                </Item>
            </FullItem>
            <FullItem>
                <Item>
                    📞 {props.number}
                </Item>
            </FullItem>
        </MainContents>
    )
}

const Groups = (props) => {
    return (
        <GroupOption>
            <MkGroupButton onClick={console.log("그룹 생성")}>
                <button type="button">그룹 개설하기</button>
            </MkGroupButton>
            <Info>
                <InfoHeader>
                        <Tab1>
                        그룹 구성 안내
                        </Tab1>
                        <Tab2>
                            모집 인원
                        </Tab2>
                        <Tab3>
                            진행 상태
                        </Tab3>
                </InfoHeader>
                <InfoBody>
                        <GroupElem>
                            <Tab1>
                            그룹명
                            </Tab1>
                            <Tab2>
                                1/3
                            </Tab2>
                            <Tab3>
                                모집 완료
                            </Tab3>
                        </GroupElem>
                        <GroupElem>
                            <Tab1>
                            그룹명sfdsfsdfsfsdfsfsfsdfs
                            </Tab1>
                            <Tab2>
                                1/3
                            </Tab2>
                            <Tab3>
                                모집 완료
                            </Tab3>
                        </GroupElem>
                        <GroupElem>
                            <Tab1>
                            그룹명
                            </Tab1>
                            <Tab2>
                                1/3
                            </Tab2>
                            <Tab3>
                                모집 완료
                            </Tab3>
                        </GroupElem>
                        <GroupElem>
                            <Tab1>
                            그룹명
                            </Tab1>
                            <Tab2>
                                1/3
                            </Tab2>
                            <Tab3>
                                모집 완료
                            </Tab3>
                        </GroupElem>
                        <GroupElem>
                            <Tab1>
                            그룹명
                            </Tab1>
                            <Tab2>
                                1/3
                            </Tab2>
                            <Tab3>
                                모집 완료
                            </Tab3>
                        </GroupElem>
                        <GroupElem>
                            <Tab1>
                            그룹명
                            </Tab1>
                            <Tab2>
                                1/3
                            </Tab2>
                            <Tab3>
                                모집 완료
                            </Tab3>
                        </GroupElem>
                        <GroupElem>
                            <Tab1>
                            그룹명
                            </Tab1>
                            <Tab2>
                                1/3
                            </Tab2>
                            <Tab3>
                                모집 완료
                            </Tab3>
                        </GroupElem>
                        <GroupElem>
                            <Tab1>
                            그룹명
                            </Tab1>
                            <Tab2>
                                1/3
                            </Tab2>
                            <Tab3>
                                모집 완료
                            </Tab3>
                        </GroupElem>
                        <GroupElem>
                            <Tab1>
                            그룹명
                            </Tab1>
                            <Tab2>
                                1/3
                            </Tab2>
                            <Tab3>
                                모집 완료
                            </Tab3>
                        </GroupElem>
                </InfoBody>
            </Info>
        </GroupOption>
    )
}
const RestaurantInfo = (props) => {
    const RestName = "도란도란";
    const RestCategory = "한식";
    const RestAddress = "서울특별시 동대문구";
    const RestNumber = "02-123-4567";


    return (
        <Content>
            <Main>
                <Detail name={RestName} category={RestCategory} address={RestAddress} number={RestNumber}></Detail>
                <Groups groupname="그룹명그룹명"></Groups>
            </Main>
        </Content>
    )
}



const Details = ({ ...props }) => {

	const [mode, setMode] = useState("DETAIL");

	return (
		<RestaurantInfo></RestaurantInfo>
	);
};
export default Details;
