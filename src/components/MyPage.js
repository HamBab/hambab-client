import React from "react";
import { useNavigate } from "react-router-dom";
import {
    MyPageSection, 
    Profile,
    MyPageButtons
} from "./styledComponent";


const MyPage = () => {
    const Nickname="nickname";
    return (
        <MyPageSection>
            <h2>MYPAGE</h2>
            <Profile>
            <h3>
                {Nickname} 님
                
            </h3>
            <br />
            <button type="submit"><i class="fa-solid fa-gear"></i> 회원정보 수정</button>
            </Profile>
            <br /><br /><br />
            <MyPageButtons>
                <button type="submit"><i class="fa-solid fa-comment"></i>채팅</button>
                <button type="submit"><i class="fa-solid fa-clock-rotate-left"></i>그룹 참여 내역 조회</button>
            </MyPageButtons>
        </MyPageSection>
    )
};

export default MyPage;

