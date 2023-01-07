import React from "react";
import { Route, Outlet, Routes } from "react-router-dom";
import About from "./About.tsx";
import Home from "./Home.tsx";
import MyPortfolio from "./MyPortfolio.tsx";

const NavSideMenu = () => {
	return (
		<>
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/portfolio" element={<MyPortfolio />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
};

export default NavSideMenu;
