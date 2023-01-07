import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import SideMenu from "../component/SideMenu.tsx";
import NavSideMenu from "./NavSideMenu.tsx";
import "./MainScreen.css";

const MainScreen = () => {
	const [hideSideBar, setHideSideBar] = useState(true);

	return (
		<div>
			<div
				className="nav-bar"
				onClick={() => {
					setHideSideBar(!hideSideBar);
				}}
			>
				{hideSideBar ? (
					<AiOutlineClose size={30} color={"#fff"} />
				) : (
					<GiHamburgerMenu size={30} color={"#fff"} />
				)}
			</div>
			<SideMenu />

			<NavSideMenu />
		</div>
	);
};
export default MainScreen;
