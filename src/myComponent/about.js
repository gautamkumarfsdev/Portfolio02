import React from "react";
import "./login.css";

/* IMPORT IMAGES */
import reactImg from "./selection1/REACT.png";
import mongoImg from "./selection1/MOGODB.png";
import expressImg from "./selection1/EXPRESS.png";
import nodeImg from "./selection1/NODE.png";
import python from "./selection1/PYTHON.png";
import postman from "./tooles/Postman.png";

import htmlImg from "./selection1/HTML.png";
import cssImg from "./selection1/CSS.png";
import jsImg from "./selection1/JAVASCRIPT.png";
import javaImg from "./selection1/JAVA.png";
import cImg from "./selection1/C.png";
import msImg from "./selection1/microsoft.png";


function Bigbox() {
    return <>
    <section className="section1">
     <div className="full">

        <div className="titli"><p>💻Software Developer & Designer</p></div>
        <div className="name">Hey! I'M 
          <samp className="name1">Gautam Kumar</samp> 
          </div>

        <div className="scorll">
            <p className="diss">A dedicated and quick-learning Computer Science Engineering student with hands-on experience in HTML, CSS, JavaScript, and React,  Express framework, MongoDB , Bootstrap  along with a solid understanding of Core Java, Python and C programming.   </p>  

            <p className="diss">Currently learning Node.js, and Data Structures & Algorithms (DSA) in Java. Seeking an opportunity in a software development role where I can apply my technical knowledge, enhance my skills, and contribute effectively to real-world projects. like  </p>


           <p className="diss"><span className="name1">Project : </span> "Car-Dekho-"
Description: Developed a responsive web page that displays car details, specifications, and pricing using HTML,
CSS, and JavaScript. Focused on creating a clean user interface and improving accessibility for better user
experience.Technologies Used: HTML, CSS</p>


<p className="diss"><span className="name1">Project : </span>  MOOD-BASED Music & Playlist
Description: Created a webpage that displays music and playlist suggestions based on different moods. Designed
an engaging and user-friendly interface using HTML, CSS, and JavaScript, focusing on layout design, interactivity,
and responsive visuals.
Technologies Used: HTML, CSS, JavaScript</p>

            
        </div>
        

         {/* BIG CIRCLE */}
          <div className="circle">
            <img src={reactImg} className="logo3 l1" alt="React" />
            <img src={mongoImg} className="logo3 l2" alt="MongoDB" />
            <img src={expressImg} className="logo3 l3" alt="Express" />
            <img src={nodeImg} className="logo3 l4" alt="Node" />
            <img src={python} className="logo3 l5" alt="Python" />
            <img src={postman} className="logo3 l6" alt="postman" />
          </div>

          {/* SMALL CIRCLE */}
          <div className="circle2">
            <img src={htmlImg} className="logo4 m1" alt="HTML" />
            <img src={cssImg} className="logo4 m2" alt="CSS" />
            <img src={jsImg} className="logo4 m3" alt="JavaScript" />
            <img src={javaImg} className="logo4 m4" alt="Java" />
            <img src={cImg} className="logo4 m5" alt="C" />
            <img src={msImg} className="logo4 m6" alt="Microsoft" />


             <div className="x">
          <button className="button">Check portfolio</button>
          <button className="button2">Contect Me</button>
        </div>


   







          </div>
          
          </div>  

               <div className="scroller">
  <div className="scroller-inner">
    <div className="scroller-item">Hello I’m Gautam Kumar</div>
    <div className="scroller-item">Welcome to my portfolio website</div>
    <div className="scroller-item">Frontend Developer</div>

    {/* duplicate */}
    <div className="scroller-item">Hello I’m Gautam Kumar</div>
    <div className="scroller-item">🚀 Welcome to my portfolio website</div>
    <div className="scroller-item">🚀 Frontend Developer</div>
    <div className="scroller-item">🚀 Back-end Developer</div>
    <div className="scroller-item">🚀 💻Software Developer</div>
    <div className="scroller-item">🚀 Webpage Deginer</div>
  </div>
</div>
         
    </section>
    </>
}

export default Bigbox;