import Curriculum from "./Curriculum";
import Modal from "./CurriculumModal";
import { useState } from "react";

export default function CurriculumPreview(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="curriculum-preview">
      <Curriculum {...props}></Curriculum>
      <ButtonPreview setShowModal={setShowModal} />

      {showModal ? (
        <Modal hideModal={() => setShowModal(false)} {...props} />
      ) : null}
    </div>
  );
}

function ButtonPreview({ setShowModal }) {
  return (
    <button className="button-preview" onClick={() => setShowModal(true)}>
      See In Detail
    </button>
  );
}
