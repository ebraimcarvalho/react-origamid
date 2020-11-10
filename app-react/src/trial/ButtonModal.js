import React from "react";

const ButtonModal = ({ modal }) => {
  return (
    <div>
      <p>{modal ? "aberto" : "fechado"}</p>
    </div>
  );
};

export default ButtonModal;
