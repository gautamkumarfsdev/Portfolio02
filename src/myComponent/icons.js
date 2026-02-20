import React from "react";
import "./login.css";

/* IMPORT IMAGES */
import bootstrap from "./tooles/bootstrap.png";
import C from "./tooles/C.png";
import Canva from "./tooles/Canva.png";
import css from "./tooles/css.png";
import python from "./tooles/python.png";
import Eclipse from "./tooles/Eclipse IDE.png";
import Express from "./tooles/Express.png";
import Git from "./tooles/Git.png";
import GitHub from "./tooles/GitHub.png";
import html from "./tooles/html.png";
import java from "./tooles/java.png";
import JavaScript from "./tooles/JavaScript.png";
import microsoft from "./tooles/microsoft.png";
import MongoDB from "./tooles/MongoDB.png";
import Node from "./tooles/Node.js.png";
import Postman from "./tooles/Postman.png";
import PyCharm from "./tooles/PyCharm.png";
import Reactt from "./tooles/React.png";
import Visual from "./tooles/Visual Studio Code.png";
import photoshop from"./tooles/photoshop.png";
import api from "./tooles/api.png"

function Icon() {
  return (
    <>
    
      <div className="full5">
          <div className="xxxx">
        Tech Stack <span className="name1"> Expertise</span>
      </div>
        <div className="full3">
          <div className="full4">🖥️ Frontend & ⚙️Backend</div>
          <div className="box-fornt">
            <div className="kk">
              <img
                src={bootstrap}
                title="Bootstrap"
                className="l"
                alt="bootstrap"
              />
            </div>
             <div className="kk">
              {" "}
              <img src={css} title="css" className="l" alt="css" />
            </div>

            <div className="kk">
              {" "}
              <img src={html} title="html" className="l" alt="html" />
            </div>

            <div className="kk">
              {" "}
              <img
                src={JavaScript}
                title="JavaScript"
                className="l"
                alt="JavaScript"
              />
            </div>




             <div className="kk">
              {" "}
              <img src={MongoDB} title="MongoDB" className="l" alt="MongoDB" />
            </div>
             <div className="kk">
              {" "}
              <img src={Express} title="Express" className="l" alt="Express" />
            </div>
            <div className="kk">
              {" "}
              <img src={Reactt} title="Reactt" className="l" alt="Reactt" />
            </div>
            <div className="kk">
              {" "}
              <img src={Node} title="Node" className="l" alt="Node" />
            </div>

              <div className="kk">
              {" "}
              <img src={api} title="api" className="l" alt="api" />
            </div>

              <div className="kk">
              {" "}
              <img src={photoshop} title="photoshop" className="l" alt="photoshop" />
            </div>







            <div className="kk">
              {" "}
              <img src={C} title="C Programing" className="l" alt="C" />
            </div>
            <div className="kk">
              {" "}
              <img src={python} title="python" className="l" alt="Python" />
            </div>
            <div className="kk">
              {" "}
              <img src={Canva} title="Canva" className="l" alt="Canva" />
            </div>
            <div className="kk">
              {" "}
              <img src={Eclipse} title="Eclipse" className="l" alt="Eclipse" />
            </div>

            

           
            <div className="kk">
              {" "}
              <img src={Git} title="Git" className="l" alt="Git" />
            </div>
            <div className="kk">
              {" "}
              <img src={GitHub} title="GitHub" className="l" alt="GitHub" />
            </div>

            <div className="kk">
              {" "}
              <img src={java} title="java" className="l" alt="java" />
            </div>
           
            <div className="kk">
              {" "}
              <img
                src={microsoft}
                title="microsoft"
                className="l"
                alt="microsoft"
              />
            </div>
        
            <div className="kk">
              {" "}
              <img src={Postman} title="Postman" className="l" alt="Postman" />
            </div>
            <div className="kk">
              {" "}
              <img src={PyCharm} title="PyCharm" className="l" alt="PyCharm" />
            </div>

            <div className="kk">
              {" "}
              <img
                src={Visual}
                title="Visual"
                className="l"
                alt="Visual"
              />{" "}
            </div>

           

          </div>
        </div>
      </div>
     
    </>
  );
}

export default Icon;
