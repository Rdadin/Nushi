import React, { useEffect } from "react";
import Title from "../Components/Title";
import img from "../img/nosotros.jpeg";

function NosotrosPage() {
  useEffect(() => {
    const el = document.querySelector(".loader-container");
    if (el) {
      setTimeout(() => {
        el.style.display = "none";
      }, 2000);
    }
  });
  return (
    <div className="NosotrosPage">
      <Title title={"NOSOTROS"} />
      <div className="nosotros">
        <p>
          Hola somos Ezequiel y Mariela. Somos pareja desde hace 5 años, yo soy
          estudiante de Gastronomía y ella Licenciada en administración y juntos
          decidimos por fuera de nuestros trabajos crear Nushi. Un
          emprendimiento de delivery de comida estilo japonesa , con toques
          tradicionales y adaptado a los gustos criollos.
        </p>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default NosotrosPage;
