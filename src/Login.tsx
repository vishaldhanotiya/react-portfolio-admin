import React from "react";
import "./Login.css";

export default function Login() {
	return (
		<div
			style={{
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div className="login-container">
				<p className="title">LOGIN</p>
				<div>
					<img
						style={{
							width: 28,
							marginBlock: 20,
							marginInline: 6,
							position: "absolute",
							height: 28,
						}}
						src={require("./res/avatar.png")}
					/>
					<input
						className="email-input"
						type="email"
						placeholder="Email"
					/>
				</div>
				<div>
					<img
						style={{
							width: 28,
							marginBlock: 20,
							marginInline: 6,
							position: "absolute",
							height: 28,
						}}
						src={require("./res/padlock.png")}
					/>
					<input
						className="email-input"
						type="password"
						placeholder="Password"
					/>
				</div>
				<div
					onClick={() => {
						alert("test");
					}}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: 5,
						borderWidth: 1,
						marginInline: 34,
						height: 45,
						color: "white",
						alignContent: "center",
						backgroundColor: "#1683af",
					}}
				>
					Login
				</div>
			</div>
			<div className="background-image" />
		</div>
	);
}
