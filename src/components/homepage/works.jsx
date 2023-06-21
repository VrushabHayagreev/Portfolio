import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://pbs.twimg.com/profile_images/1651635610333990914/67e2ljBD_400x400.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Qualcomm</div>
							<div className="work-subtitle">
								Programmer Analyst
							</div>
							<div className="work-duration"> June 2010 - May 2021</div>
						</div>

						<div className="work">
							<img
								src="https://pbs.twimg.com/profile_images/1651635610333990914/67e2ljBD_400x400.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Qualcomm</div>
							<div className="work-subtitle">
								Intern
							</div>
							<div className="work-duration">Jan 2020 - June 2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
