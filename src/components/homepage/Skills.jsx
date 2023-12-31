import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Education = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Skills"
				body={
					<div className="works-body">	
     <div class="skills-section">
     </div>
     <div class="skills-container">
       
      <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"     alt="" class="skills-icons"></img>
        </div>
         <h3>HTML 5</h3>
        </div>
        
       </div>
       
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" alt="" class="skills-icons"></img>
        </div>
        <h3>CSS3</h3>
        </div>
           
       </div>
       
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://icon-library.net/images/javascript-icon-png/javascript-icon-png-23.jpg" alt="" class="skills-icons"></img>
        </div>
        <h3>JAVASCRIPT</h3>
        </div>
        
       </div>
       
          <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png" alt="" class="skills-icons"></img>
        </div>
        <h3>NODE.JS</h3>
        </div>
        
       </div>
       
          <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png" alt="" class="skills-icons"></img>
        </div>
        <h3>REACT</h3>
        </div>
        
       </div>
       
          <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png" alt="" class="skills-icons"></img>
        </div>
        <h3>C</h3>
        </div>
        
       </div>
       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" alt="" class="skills-icons"></img>
        </div>
        <h3>C++</h3>
        </div>
        
       </div>
       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="" class="skills-icons"></img>
        </div>
        <h3>PYTHON</h3>
        </div>
        
       </div>
       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Perl_language_logo.svg/1200px-Perl_language_logo.svg.png" alt="" class="skills-icons"></img>
        </div>
        <h3>PERL</h3>
        </div>
        
       </div>
       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.jpg" alt="" class="skills-icons"></img>
        </div>
        <h3>MYSQL</h3>
        </div>
        
       </div>
       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png" alt="" class="skills-icons"></img>
        </div>
        <h3>EXPRESS JS</h3>
        </div>
        
       </div>
       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png" alt="" class="skills-icons"></img>
        </div>
        <h3>GIT</h3>
        </div>
        
       </div>
       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://project-management.com/wp-content/uploads/2022/12/atlassian_jira.png" alt="" class="skills-icons"></img>
        </div>
        <h3>JIRA</h3>
        </div>
        
       </div>
       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://e7.pngegg.com/pngimages/899/221/png-clipart-splunk-vertical-logo-tech-companies-thumbnail.png" alt="" class="skills-icons"></img>
        </div>
        <h3>SPLUNK</h3>
        </div>
        
       </div>
       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://miro.medium.com/v2/resize:fit:400/1*NgtJ1cJU5TG1oB0qh8_Reg.png" alt="" class="skills-icons"></img>
        </div>
        <h3>CLOUD 9</h3>
        </div>
        
       </div>
       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="data:image/png;base64,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" alt="" class="skills-icons"></img>
        </div>
        <h3>AWS</h3>
        </div>
        
       </div>
       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://w7.pngwing.com/pngs/98/646/png-transparent-oracle-corporation-oracle-webcenter-oracle-database-oracle-e-business-suite-oracle-applications-others-text-trademark-logo-thumbnail.png" alt="" class="skills-icons"></img>
        </div>
        <h3>ORACLE DB</h3>
        </div>
        
       </div>
       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://res.cloudinary.com/hevo/image/upload/v1626694700/hevo-blog/MongoDB-sm-logo-500x400-1-1.gif" alt="" class="skills-icons"></img>
        </div>
        <h3>MONGO DB</h3>
        </div>
        
       </div>
       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://go.neo4j.com/rs/710-RRC-335/images/neo4j_logo_globe.png" alt="" class="skills-icons"></img>
        </div>
        <h3>NEO 4J</h3>
        </div>
        
       </div>
       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://code.visualstudio.com/assets/apple-touch-icon.png" alt="" class="skills-icons"></img>
        </div>
        <h3>VS CODE</h3>
        </div>
        
       </div>
       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="" class="skills-icons"></img>
        </div>
        <h3>NEXT JS</h3>
        </div>
        
       </div>
       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://graphql.js.cool/img/twitter_image.png" alt="" class="skills-icons"></img>
        </div>
        <h3>GRAPH QL</h3>
        </div>
        
       </div>
       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0XC1HyHho088Uc-M_-bCrT8s45kSQefGF26k94yTd36UuhoO8rsPizA2JRj8n8wrAN8&usqp=CAU" alt="" class="skills-icons"></img>
        </div>
        <h3>NETLIFY</h3>
        </div>
        
       </div>
       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://logowik.com/content/uploads/images/heroku8748.jpg" alt="" class="skills-icons"></img>
        </div>
        <h3>HEROKU</h3>
        </div>
        
       </div>
       </div>
       
    
     </div>
   
				}
			/>
		</div>
	);
};

export default Education;
