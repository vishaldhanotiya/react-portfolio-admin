import React, { useRef } from "react";
import "./About.css";

const About = () => {
	const fileInputRef = useRef(null);

	const openFileDialog = (event) => {
		fileInputRef.current.value = "";
		fileInputRef.current.click();
	};

	return (
		<div>
			<div className="about-div">
				<div></div>
				<div>
					<div className="about-title-text">
						{"Upload developer profile image"}
					</div>
					<div className="profile-image-div">
						<div className="profile-image-border">
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
					<div className="title-text">{"About developer"}</div>
					<input
						className="input-about"
						type="text"
						placeholder="Tell me about developer"
					/>
				</div>
				<div>
					<div className="title-text">{"Facebook url"}</div>
					<input
						type={"text"}
						className="input-about"
						placeholder="Enter facebook url"
					/>
				</div>
				<div>
					<div className="title-text">{"Twitter url"}</div>
					<input
						type={"text"}
						className="input-about"
						placeholder="Enter twitter url"
					/>
				</div>
				<div>
					<div className="title-text">{"Google Plus url"}</div>
					<input
						type={"text"}
						className="input-about"
						placeholder="Enter google url"
					/>
				</div>
				<div>
					<div className="title-text">{"Pinterest url"}</div>
					<input
						type={"text"}
						className="input-about"
						placeholder="Enter pinterest url"
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
export default About;
