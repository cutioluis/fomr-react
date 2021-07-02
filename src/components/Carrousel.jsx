import React from "react";
import "../styles/Carrousel.css";
import Login from "../components/Login";
import LoginTitle from "./LoginTitle";

const Carrousel = () => {
  return (
    <div className="container-slide">
      <ul className="slider">
        <li id="slide1">
          <img src="https://scontent.fuio5-1.fna.fbcdn.net/v/t1.15752-9/210825307_556413008856173_1956352047527446296_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=tbqVksKXJbAAX_wLl3x&_nc_ht=scontent.fuio5-1.fna&oh=a23d1ca017cde8b48694e6d71492e3ff&oe=60E0B40F" />
        </li>
        <li id="slide2">
          <img src="https://scontent.fuio5-1.fna.fbcdn.net/v/t1.15752-9/209975816_796297657713246_6855166620448742679_n.png?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=W2PKGN88MKwAX-uT9im&tn=XegcD2hJaD36qTbT&_nc_ht=scontent.fuio5-1.fna&oh=89af47ab514b916ffe1238f142779676&oe=60E174DB" />
        </li>
        <li id="slide3">
          <img
            src="https://scontent.fuio5-1.fna.fbcdn.net/v/t1.15752-9/209605465_336540308064779_3162365039444623798_n.png?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_ohc=M_TtClNKEcMAX9WgklI&_nc_ht=scontent.fuio5-1.fna&oh=94ce44f35d0263877bdab0c47b154594&oe=60E14F7F"
            alt=""
          />
        </li>
      </ul>
      <ul className="menu">
        <li>
          <a href="#slide1"></a>
        </li>
        <li>
          <a href="#slide2"></a>
        </li>
        <li>
          <a href="#slide3"></a>
        </li>
      </ul>
    </div>
  );
};

export default Carrousel;
