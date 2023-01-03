import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../component/SideMenu.tsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./Home.css";

const Home = () => {
	const navigation = useNavigate();
	const [hideSideBar, setHideSideBar] = useState(false);

	return (
		<div>
			{/* <div
				className="nav-bar"
				onClick={() => {
					setHideSideBar(!hideSideBar);
				}}
			>
				{hideSideBar ? (
					<AiOutlineClose size={30} />
				) : (
					<GiHamburgerMenu size={30} />
				)}
			</div> */}
			{hideSideBar && <SideMenu />}
			<div className="home-div">
				<span>{"Hello......"}</span>
				<div>
					<div>{"Upload background Image"}</div>
				</div>
				<div>
					<div>{"Upload logo"}</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
