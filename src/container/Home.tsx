import React, { useState, useRef } from "react";
import "./Home.css";

const Home = () => {
	const [hideSideBar, setHideSideBar] = useState(true);
	const fileInputRef = useRef(null);

	const openFileDialog = (event) => {
		fileInputRef.current.value = "";
		fileInputRef.current.click();
	};

	return (
		<div>
			<div className="home-div">
				<div>
					<div className="title-text">
						{"Upload background Image"}
					</div>
					<div className="background-image-div">
						<div className="background-image-border">
							<div>
								{
									'Add files by dragging them here or click the "Add files" button.'
								}
							</div>
							<div
								className="add-file-btn"
								onClick={openFileDialog}
							>
								<span>{"Add files"}</span>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="title-text">{"Upload logo"}</div>
					<div className="background-image-div">
						<div className="background-image-border">
							<div>
								{
									'Add files by dragging them here or click the "Add files" button.'
								}
							</div>
							<div
								className="add-file-btn"
								onClick={openFileDialog}
							>
								<span>{"Add files"}</span>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="title-text">{"Developer Name"}</div>
					<input
						className="input-home"
						type="text"
						placeholder="Please enter developer name"
					/>
				</div>
				<div>
					<div className="title-text">
						{"Tell me about developer"}
					</div>
					<input
						type={"text"}
						className="input-home"
						placeholder="Tell me about developer"
					/>
				</div>
				<div>
					<div className="title-text">
						{"Developer email for contact"}
					</div>
					<input
						type={"text"}
						className="input-home"
						placeholder="Enter developer email for contact us"
					/>
				</div>
				<div className="save-btn">
					<div className="save-detail-btn">
						<span>{"Save Details"}</span>
					</div>
				</div>
			</div>
			<input
				ref={fileInputRef}
				className={"file-upload"}
				type={"file"}
				multiple
			/>
		</div>
	);
};
export default Home;
