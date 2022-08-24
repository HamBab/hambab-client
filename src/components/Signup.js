import React, { useState } from "react";

// import axios from "axios";
import { SignupSection, ButtonDiv } from "./styledComponent";
import Button from "react-bootstrap/Button";

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSignUpButton = async () => {
		// try {
		// 	await axios({
		// 		method: "post",
		// 		url: "http://127.0.0.1:8000/user/signup",
		// 		data: {
		// 			username: email,
		// 			password: password,
		// 			nickname: name,
		// 		},
		// 	});
		// 	alert("Success");
		// 	// setTimeout(() => {
		// 	// 	navigate("/login");
		// 	// }, 2000);
		// } catch (e) {
		// 	alert("이미 존재하는 아이디입니다.");
		// }
	};

	const onNameHandler = (event) => {
		setName(event.currentTarget.value);
	};
	const onEmailHandler = (event) => {
		setEmail(event.currentTarget.value);
	};

	const onPasswordHandler = (event) => {
		setPassword(event.currentTarget.value);
	};

	const onConfirmPasswordHandler = (event) => {
		setConfirmPassword(event.currentTarget.value);
	};

	return (
		<SignupSection>
			<h2>SignUp</h2>
			<form>
				<div>
					<input
						name="name"
						type="text"
						placeholder="이름"
						value={name}
						onChange={onNameHandler}
						className="loginregister__input"
					/>
				</div>
				<div>
					<input
						name="email"
						type="email"
						placeholder="이메일"
						value={email}
						onChange={onEmailHandler}
						className="loginregister__input"
					/>
				</div>
				<div>
					<input
						name="password"
						type="password"
						placeholder="비밀번호"
						value={password}
						onChange={onPasswordHandler}
						className="loginregister__input"
					/>
				</div>
				<div>
					<input
						name="confirmPassword"
						type="password"
						placeholder="비밀번호 확인"
						value={confirmPassword}
						onChange={onConfirmPasswordHandler}
						className="loginregister__input"
					/>
				</div>
				<ButtonDiv className="d-grid gap-2">
					{confirmPassword.length === 0 ||
						name.length === 0 ||
						password.length === 0 ||
						email.length === 0 ? (
						<Button variant="outline-light" size="lg">
							회원가입
						</Button>
					) : (
						<Button
							type="submit"
							variant="outline-light"
							size="lg"
							onClick={() => {
								handleSignUpButton();
							}}
						>
							회원가입
						</Button>
					)}
				</ButtonDiv>
			</form>
		</SignupSection>
	);
};
export default Signup;