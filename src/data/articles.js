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
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
				<embed src="https://www.ijtre.com/images/scripts/2020080104.pdf" width="800px" height="2100px" />
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
			<embed src="https://www.ijtre.com/images/scripts/2020071223.pdf" width="800px" height="2100px" />
			</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
