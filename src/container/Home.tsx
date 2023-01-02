import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigation = useNavigate();
	return (
		<div
			onClick={() => {
				navigation("About");
			}}
		>
			Home
		</div>
	);
};
export default Home;
