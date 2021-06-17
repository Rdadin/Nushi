import React from "react";
import Title from "../Components/Title";
import { Carousel } from "3d-react-carousal";
import menuGyosas from "../img/menu-gyosas.png";
import menuUrumaki from "../img/menu-urumaki.png";
import menuVeggie from "../img/menu-veggie.png";
import menuHot from "../img/menu-hot.png";
import menuTablas from "../img/menu-tablas.png";
import menuTablas2 from "../img/menu-tablas-2.png";

function MenuPage() {
  let slides = [
    <img src={menuGyosas} alt="1" />,
    <img src={menuUrumaki} alt="2" />,
    <img src={menuVeggie} alt="3" />,
    <img src={menuHot} alt="4" />,
    <img src={menuTablas} alt="5" />,
    <img src={menuTablas2} alt="5" />,
  ];
  return (
    <div className="MenuPage">
      <Title title={"MENU"} />
      <div className="menu">
        <Carousel
          className="carousel"
          slides={slides}
          autoplay={false}
          interval={1000}
        />
      </div>
    </div>
  );
}

export default MenuPage;
