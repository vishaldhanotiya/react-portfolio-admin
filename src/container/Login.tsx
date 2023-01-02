import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../constants/Icon.ts";
import "./Login.css";

export default function Login() {
	const navigation = useNavigate();

	const handleLoginClick = () => {
		navigation("Home", { replace: true });
	};

	return (
		<div className="main-div">
			<div className="login-container">
				<p className="title">LOGIN</p>
				<div>
					<img
						alt={"person"}
						className="image-icon"
						src={Icon.person}
					/>
					<input className="input" type="email" placeholder="Email" />
				</div>
				<div>
					<img
						alt={"person"}
						className="image-icon"
						src={Icon.password}
					/>
					<input
						className="input"
						type="password"
						placeholder="Password"
					/>
				</div>
				<div onClick={handleLoginClick} className="btn-login">
					Login
				</div>
			</div>
			<div className="background-image" />
		</div>
	);
}
