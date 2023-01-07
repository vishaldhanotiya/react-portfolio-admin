import React, { useState } from "react";
import "./SideMenu.css";
import {
	FaHome,
	FaLaptop,
	FaUser,
	FaPen,
	FaRegStickyNote,
	FaPhone,
	FaRegFileArchive,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SideMenu = () => {
	const [hideSideBar, setHideSideBar] = useState(false);
	return (
		<div className="main-div">
			<div
				className="profile-div"
				onClick={() => {
					setHideSideBar(!hideSideBar);
				}}
			>
				<img
					alt={"person"}
					className="image-icons"
					src="https://images.news18.com/ibnlive/uploads/2022/07/5b64ef07d608085cf4b239ddfeda4a8d.png"
				/>
				<span className="name">VISHAL DHANOTIYA</span>
			</div>
			<Link to="/">
				<div className="menu-item">
					<FaHome size={23} color={"white"} />
					<span className="menu-text">Home</span>
				</div>
			</Link>
			<Link to="about">
				<div className="menu-item">
					<FaUser size={23} color={"white"} />
					<div className="menu-text">About me</div>
				</div>
			</Link>
			<div className="menu-item">
				<FaLaptop size={23} color={"white"} />
				<span className="menu-text">What I do</span>
			</div>
			<Link to="/portfolio">
				<div className="menu-item">
					<FaRegFileArchive size={23} color={"white"} />
					<span className="menu-text">My Portfolio</span>
				</div>
			</Link>
			<div className="menu-item">
				<FaPen size={23} color={"white"} />
				<span className="menu-text">Testimonial's</span>
			</div>
			<div className="menu-item">
				<FaRegStickyNote size={23} color={"white"} />
				<span className="menu-text">Blog</span>
			</div>
			<div className="menu-item">
				<FaPhone size={23} color={"white"} />
				<span className="menu-text">Contact us</span>
			</div>
		</div>
	);
};

export default SideMenu;
