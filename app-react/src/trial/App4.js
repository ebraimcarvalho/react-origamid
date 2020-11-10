import React, { useState } from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const App = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <p>Modal</p>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal modal={modal} />
    </div>
  );
};

export default App;
