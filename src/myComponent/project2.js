import React from "react";
import "./login.css";

import letest from "./projectphoto/comeingsoon.jpg";
import portfolio from "./projectphoto/portfolio.png";
import cardekho from "./projectphoto/cardekho.png";
import musicbased from "./projectphoto/musicbased.png";

function Boxx() {
  return (
    <>
      <div className="box9">
        <div className="box8">
          <div className="pp">
            <img
              src={letest}
              title="coming soon work"
              className="ppp"
              alt="letest"
            />
          </div>

          <div className="box10">
            <div className="box11">
              <h1 className="box12">Comeing soon....</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="box9">
        <div className="box8">
          <div className="pp">
            <img
              src={portfolio}
              title="Portfolio Website"
              className="ppp"
              alt="letest"
            />
          </div>

          <div className="box13">
            <div className="box14">
              <h1 className="box15">💼 About My Portfolio Website</h1>

              <p className="box16">
                This is my frist portfolio website represents my journey as a
                passionate and dedicated Software Developer. It is designed with
                a modern and professional UI using a dark theme with orange
                highlights to create a strong visual impact. The homepage
                features a clean hero section introducing me as a Software
                Developer & Designer. It highlights my technical skills
                including HTML, CSS, JavaScript, React, Node.js, Express,
                MongoDB, Java, Python, and C. The layout is structured in a way
                that clearly presents my profile, skills, and projects in an
                organized manner. The circular profile section with technology
                icons around it reflects my technical stack and learning path.
                The smooth design, responsive layout, and interactive buttons
                enhance user experience and showcase my frontend development
                skills. This website is not just a portfolio, but a
                representation of my growth, creativity, and dedication toward
                becoming a professional software developer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="box9">
        <div className="box8">
          <div className="pp">
            <img
              src={musicbased}
              title="Portfolio Website"
              className="ppp"
              alt="letest"
            />
          </div>

          <div className="box13">
            <div className="box14">
              <h1 className="box15">🎵 Mood-Based Music Website</h1>

              <p className="box16">
                This project is a music streaming website designed to provide
                users with an engaging and personalized music experience. The
                platform focuses on trending songs, popular artists, and
                mood-based playlists to make music discovery easy and enjoyable.
              </p>

              <p className="box16">
                The main goal of this project is to create a simple and
                attractive music platform that allows users to: Search songs
                easily Listen to trending tracks Explore popular artists Enjoy a
                mood-based music experience The design focuses on smooth user
                interaction, modern UI styling, and accessibility. It
                demonstrates frontend development skills including layout
                design, media integration (audio player), responsive structure,
                and user interface styling.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="box9">
        <div className="box8">
          <div className="pp">
            <img src={cardekho} title="CarDekho" className="ppp" alt="letest" />
          </div>

          <div className="box13">
            <div className="box14">
              <h1 className="box15">🚗 About My CarDekho Website</h1>

              <p className="box16">
                The main goal of this project is to create a simple and
                user-friendly platform that helps people, especially in rural
                areas, to easily search, compare, and buy new or used cars. In
                many rural areas, people do not have easy access to big car
                showrooms or detailed automobile information. This website aims
                to bridge that gap by providing: Easy search options for new and
                used cars Clear information about price, features, and
                specifications Launch updates and latest offers Test drive
                booking options City-based availability Overall, the goal is to
                make car buying easier, more transparent, and more accessible
                for everyone, especially people living in rural and semi-urban
                areas.{" "}
              </p>
              <p className="box16">
                The ultimate objective is to empower rural buyers by giving them
                access to the same car market opportunities that are available
                in urban areas.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Boxx;
