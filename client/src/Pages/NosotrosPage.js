import React from "react";
import Title from "../Components/Title";
import img from "../img/nosotros.jpeg";

function NosotrosPage() {
  return (
    <div className="NosotrosPage">
      <Title title={"NOSOTROS"} />
      <div className="nosotros">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          at nesciunt maiores labore nihil illo magni. Voluptas nostrum vero,
          reprehenderit saepe quia ipsum modi. Accusantium, incidunt quidem iste
          labore temporibus aliquid magnam sunt unde! Ipsa quam error labore.
          Quos, ipsa omnis! Nulla iusto sequi delectus excepturi dolor est
          voluptates alias?
        </p>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default NosotrosPage;
