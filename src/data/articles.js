import React from "react";

function article_1() {
	return {
		date: "8 septmenber 2020",
		title: "Deep Dreaming and Artistic Style Transfer",
		description:
			"Built a Convolutional Neural network using Artistic Style Transfer which makes use of an inception network in deep learning to build a hallucinating appearance of a given base image.",
		keywords: [
			" Convolutional Neural Nets",
			"ensor-flow",
			"Deep Dreaming",
			" Jupiter Notebook",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
			
				
				`
				,
		body: (
			<React.Fragment>
				<div className="article-content">
					<br></br>
				<embed src="https://www.ijtre.com/images/scripts/2020080104.pdf" width="1000px" height="800px" />
				<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" rel="stylesheet"/>
					<a class="btn btn-primary" target="_blank" href="https://www.ijtre.com/images/scripts/2020080104.pdf">View and Download</a>
				</div>
				<div className="center">
				<img src="https://drive.google.com/uc?export=view&id=1lhjEl5K4GG6vgvSJQvbhEk8mTY3jXE73"  width="1000"  height="600"></img>
				</div>
				
				
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "10 August 2020",
		title: "Wireless Digital Noticeboard using Raspberry Pie",
		description:
			"Built a wireless notice board for the computer science department using web technology(HTML, CSS, Javascript, Nodejs and MySQL) and Raspberry pie",
		style: ``,
		keywords: [
			"Raspberry Pie",
			"Web Development",
			"Wireless",
			"Department",
		],
		body: (
			<React.Fragment>
			<div className="article-content">
			<embed src="https://www.ijtre.com/images/scripts/2020071223.pdf" width="1000px" height="700px" />
			<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" rel="stylesheet"/>
					<a class="btn btn-primary" target="_blank" href="https://www.ijtre.com/images/scripts/2020071223.pdf">View and Download</a>
					
			</div>
			<br></br>
			<br></br>
			<div className = "center">
			<img src="https://drive.google.com/uc?export=view&id=1xWfmI7EnG6yb1-ZTZasM1nBqoTfJ_EkH" width="1000"  height="600"></img>
			</div>
			
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
