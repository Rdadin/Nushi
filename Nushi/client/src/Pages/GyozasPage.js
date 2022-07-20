import React, { useEffect } from "react";
import Title from "../Components/Title";

function GyozasPage() {
  useEffect(() => {
    const el = document.querySelector(".loader-container");
    if (el) {
      setTimeout(() => {
        el.style.display = "none";
      }, 2000);
    }
  });
  return (
    <div className="GyozasPage">
      <Title title={"INSTRUCTIVO GYOZAS"} />
    </div>
  );
}

export default GyozasPage;
