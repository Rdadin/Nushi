import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ImageGallery from "react-image-gallery";
import images from "../img/gallery.js";
import Title from "../Components/Title";

function HomePage() {
  return (
    <div className="HomePage">
      <section className="intro">" "</section>
      <section className="gallery">
        <Title title={"Galeria"} />
        <div className="gallery-container">
          <ImageGallery items={images} />
        </div>
      </section>

      <section className="map-sect">
        <Title title={"Envios"} />
        <div className="map">
          <div className="map-banner">
            <p>Hacemos envios por zona norte, localidades:</p>
            <div className="localidades">
              <div>
                <p>San Isidro</p>
                <p>Martinez</p>
                <p>Acassuso</p>
                <p>Olivos</p>
                <p>La Lucila</p>
                <p>Florida</p>
                <p>Vicente Lopez</p>
              </div>
            </div>
            <p style={{ marginTop: "2rem" }}>
              Consultar por envios a zonas aledañas o CABA.
            </p>
          </div>
          <iframe
            title="Delivery Nushi"
            src="https://www.google.com/maps/d/embed?mid=125_WdTXg4z7MawCToK6cb0laPqVzWxBc"
            width="950"
            height="700"
          ></iframe>
        </div>
      </section>
      <footer>Copyright © 2021 NUSHI | Desarrollado por TDT</footer>
      <div className="social-media">
        <p>Hace tu pedido!</p>
        <a
          href="https://www.instagram.com/nushi_ok/?hl=es-la"
          className="insta-back"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ fontSize: "4rem", color: "white" }}
          />
        </a>
        <a href="https://wa.me/5491160073442" className="whats-back">
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{ fontSize: "4rem", color: "white" }}
          />
        </a>
      </div>
    </div>
  );
}

export default HomePage;
