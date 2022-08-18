/* Code generated with AutoHTML for Figma */
import './Content.css';
import React, { Component } from 'react';

const Details = (props) => {
    return (
        <div className="frame-23">
            <div className="frame-22">
                <div className="---">
                    {props.name}
                </div>
            </div>
            <div className="frame-232">
                <div className="-------">
                    🗂 {props.category}
                </div>
            </div>
            <div className="frame-24">
                <div className="-----">
                    📍 {props.address}
                </div>
            </div>
            <div className="frame-25">
                <div className="-------">
                    📞 {props.number}
                </div>
            </div>
        </div>
    )
}

const Groups = (props) => {
    return (
        <div className="frame-27">
            <div className="button">
                <div className="-----2">
                    그룹 개설
                </div>
            </div>
            <div className="groups">
                <div className="header">
                    <div className="frame-33">
                        <div className="frame-332">
                            <div className="---2">
                                그룹명
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
export const Frame26 = (props) => {
    const RestName = "도란도란";
    const RestCategory = "한식";
    const RestAddress = "서울특별시 동대문구";
    const RestNumber = "02-123-4567";

    return (
        <div className='content'>
            <div className="frame-26">
                <Details name={RestName} category={RestCategory} address={RestAddress} number={RestNumber}></Details>
                <Groups groupname="그룹명그룹명"></Groups>
            </div>
        </div>
    )
}
export default Frame26;