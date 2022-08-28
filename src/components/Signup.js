import React, { useState } from "react";
// import axios from "axios";
import { SignupSection, ButtonDiv } from "./styledComponent";
import Button from "react-bootstrap/Button";

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [nickname, setNickname] = useState("");
	const [sex, setSex] = useState("");
	const [year, setYear] = useState("");
	const [month, setMonth] = useState("");
	const [day, setDay] = useState("");

	const yearList = [];
	const monthList = [];
	const day28List = [];
	const day29List = [];
	const day30List = [];
	const day31List = [];

	for (let i = 1900; i <= 2004; i++) {
		yearList.push(i);
	}
	for (let i = 1; i <= 12; i++) {
		monthList.push(i);
	}
	for (let i = 1; i <= 28; i++) {
		day28List.push(i);
	}
	for (let i = 1; i <= 29; i++) {
		day29List.push(i);
	}
	for (let i = 1; i <= 30; i++) {
		day30List.push(i);
	}
	for (let i = 1; i <= 31; i++) {
		day31List.push(i);
	}

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

	const onNicknameHandler = (event) => {
		setNickname(event.currentTarget.value);
	};
	const onSexHandler = (event) => {
		setSex(event.currentTarget.value);
	};
	const onYearHandler = (event) => {
		setYear(event.currentTarget.value);
	};
	const onMonthHandler = (event) => {
		setMonth(event.currentTarget.value);
	};
	const onDayHandler = (event) => {
		setDay(event.currentTarget.value);
	};

	return (
		<SignupSection>
			<h1>SignUp</h1>
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
				<div>
					<input
						type="text"
						placeholder="닉네임"
						onChange={onNicknameHandler}
					/>
				</div>
				<div class="info" id="info__birth">
					<select class="box" id="birth-year">
						<option disabled selected>
							출생 연도
						</option>
						{yearList.map((year) => (
							<option value={year} key={year}>
								{year}
							</option>
						))}
					</select>
					<select class="box" id="birth-month">
						<option disabled selected>
							월
						</option>
						{monthList.map((mon) => (
							<option value={mon} key={mon}>
								{mon}
							</option>
						))}
					</select>
					<select class="box" id="birth-day">
						<option disabled selected>
							일
						</option>
					</select>
				</div>
				<div>
					<input type="radio" name="sex" value="male" />남
					<input type="radio" name="sex" value="female" />여
				</div>
				<ButtonDiv className="d-grid gap-2">
					{confirmPassword.length === 0 ||
					name.length === 0 ||
					password.length === 0 ||
					email.length === 0 ? (
						<Button variant="outline-light" size="lg" disabled>
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
