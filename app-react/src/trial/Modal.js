import React from "react";

function Modal({ modal, setModal }) {
  return (
    <div>
      <button onClick={() => setModal(!modal)}>
        {modal ? "Fechar" : "Abrir"}
      </button>
    </div>
  );
}

export default Modal;
