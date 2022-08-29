import React, { useState, useEffect } from "react";


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
	const [dayList, setDayList] = useState("");

	const yearList = [];
	const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	for (let i = 1900; i < 2005; i++) {
		yearList.push(i);
	}

	useEffect(() => {
		const temp = [];
		if (
			month == 1 ||
			month == 3 ||
			month == 5 ||
			month == 7 ||
			month == 8 ||
			month == 10 ||
			month == 12
		) {
			for (let i = 1; i <= 31; i++) {
				temp.push(i);
			}
		} else if (month == 2) {
			if (
				(year % 4 == 0 && year % 100 != 0) ||
				(year % 100 != 0 && year % 400 == 0)
			) {
				for (let i = 1; i <= 29; i++) {
					temp.push(i);
				}
			} else {
				for (let i = 1; i <= 28; i++) {
					temp.push(i);
				}
			}
		} else if (month == 4 || month == 6 || month == 9 || month == 11) {
			for (let i = 1; i <= 30; i++) {
				temp.push(i);
			}
		}
		setDayList(temp);
	}, [month, year]);

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
				<div>
					<input
						type="text"
						placeholder="닉네임"
						onChange={onNicknameHandler}
					/>
				</div>
				<div id="info__birth">
					<select id="birth-year" onChange={onYearHandler}>
						<option disabled selected>
							출생 연도
						</option>
						{yearList.map((year) => (
							<option value={year} key={year}>
								{year}
							</option>
						))}
					</select>
					<select id="birth-month" onChange={onMonthHandler}>
						<option disabled selected>
							월
						</option>
						{monthList.map((mon) => (
							<option value={mon} key={mon}>
								{mon}
							</option>
						))}
					</select>
					<select id="birth-day" onChange={onDayHandler}>
						<option disabled selected>
							일
						</option>
						{dayList.length != 0 &&
							dayList.map((day) => (
								<option value={day} key={day}>
									{day}
								</option>
							))}
					</select>
				</div>
				<div>
					<input type="radio" name="sex" value="male" onChange={onSexHandler} />
					남
					<input
						type="radio"
						name="sex"
						value="female"
						onChange={onSexHandler}
					/>
					여
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