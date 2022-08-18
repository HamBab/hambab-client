import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
	LoginSection,
	LoginText,
	ButtonDiv,
	SignupButton,
} from "./styledComponent";
import Button from "react-bootstrap/Button";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	const goSignUp = () => {
		navigate("/signup");
	};

	const handleLoginButton = () => {
		// axios
		// 	.post(
		// 		"http://127.0.0.1:8000/user/login",
		// 		{
		// 			username: username,
		// 			password: password,
		// 		},
		// 		{
		// 			withCredentials: true, // 쿠키 cors 통신 설정
		// 			// Access-Control-Expose-Headers: "Set-Cookie",
		// 		}
		// 	)
		// 	.then((response) => {
		// 		console.log(response);
		// 		console.log(document.cookie);
		// 	});
	};

	const handelKeyPress = (e) => {
		if (e.key === "Enter") {
			handleLoginButton();
		}
	};

	return (
		<LoginSection>
			<h1>LOGIN</h1>
			<input
				type="text"
				size={20}
				onChange={(e) => {
					setUsername(e.target.value);
				}}
				placeholder="아이디"
			/>
			<input
				type="password"
				size={20}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
				onKeyDown={(e) => {
					handelKeyPress(e);
				}}
				placeholder="비밀번호"
			/>
			<ButtonDiv className="d-grid gap-2">
				{password.length === 0 ? (
					<Button variant="outline-light" size="lg" disabled>
						로그인
					</Button>
				) : (
					<Button
						variant="outline-light"
						size="lg"
						onClick={() => {
							handleLoginButton();
						}}
					>
						로그인
					</Button>
				)}
			</ButtonDiv>
			<LoginText>
				<div>회원이 아니신가요?</div>
				<SignupButton onClick={() => goSignUp()}>회원가입</SignupButton>
			</LoginText>
		</LoginSection>
	);
};

export default Login;
