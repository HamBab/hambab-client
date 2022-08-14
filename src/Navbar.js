import React, { Component } from 'react';
import './Navbar.css';
import logo from './logo.png';

export const Navbar = ({
    ...props
}) => {
    return (
        <div className="navbar">
            <div className="group-1960">
                <img src={logo} alt="logo" width={150}></img>
            </div>
            <div className="-search-form">
                <div className="rectangle-1155">

                </div>
                <div className="group-1975">
                    <div className="rectangle-1142">
                    </div>
                </div>
                <div className="search---">
                    <input type="text" name="텍스트" value="검색어를 입력하세요..."></input>
                </div>
                <div className="group">
                    <div className="group">
                        <svg className="group2" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.8445 15.2038L12.7435 10.0991L10.104 12.7386L15.2087 17.8433C15.6276 18.2622 16.3172 18.2622 16.7361 17.8433L17.8445 16.7349C18.2634 16.3123 18.2634 15.619 17.8445 15.2038Z" fill="#FEFDFE" />
                            <path d="M10.2192 11.6005L11.6019 10.2178L10.0264 8.64225C11.5167 6.49582 11.3091 3.5227 9.39619 1.60982C7.24976 -0.536607 3.76135 -0.536607 1.61121 1.60982C-0.538924 3.75625 -0.535217 7.24466 1.61121 9.3948C3.52409 11.3077 6.49721 11.5153 8.64364 10.025L10.2192 11.6005ZM2.67887 8.31232C1.12187 6.75532 1.12187 4.23076 2.67887 2.67748C4.23586 1.12048 6.76042 1.12048 8.31371 2.67748C9.8707 4.23447 9.8707 6.75903 8.31371 8.31232C6.76042 9.86931 4.23586 9.86931 2.67887 8.31232Z" fill="#FEFDFE" />
                        </svg>

                    </div>
                </div>
            </div>
            <div className="navbar2">
                <div className="nav_home">
                    <div className="home">
                        HOME
                    </div>
                </div>
                <div className="nav_chat">
                    <div className="chat">
                        CHAT
                    </div>
                </div>
                <div className="nav_mypage">
                    <div className="mypage">
                        MYPAGE
                    </div>
                </div>
                <div className="frame-5">
                    <div className="logout">
                        LOGOUT
                    </div>
                </div>
                <div className="frame-6">
                    <div className="aboutus">
                        ABOUTUS
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;