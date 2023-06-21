import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Education = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://pbs.twimg.com/profile_images/1651635610333990914/67e2ljBD_400x400.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Indiana University Bloomington</div>
							<div className="work-subtitle">
								Masters in Computer Science 
							</div>
							<div className="work-duration"> Aug 2021 - May 2023</div>
						</div>

						<div className="work">
							<img
								src="https://pbs.twimg.com/profile_images/1651635610333990914/67e2ljBD_400x400.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">JSS Science and Technology University</div>
							<div className="work-subtitle">
							Bachelors in Computer Science 
							</div>
							<div className="work-duration">Aug 2016 - Aug 2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Education;
