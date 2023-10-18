import Curriculum from "./Curriculum";
import Modal from "./CurriculumModal";
import { useState, useRef, useEffect, useLayoutEffect } from "react";

export default function CurriculumPreview(props) {
  const [showModal, setShowModal] = useState(false);

  const ref = useRef(null);
  const [scale, setScale] = useState(0);

  useLayoutEffect(() => {
    setScale(ref.current.offsetWidth / 800);
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      const { width } = ref.current.getBoundingClientRect();
      setScale(width / 800);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="curriculum-preview" ref={ref}>
      <Curriculum scale={scale} {...props}></Curriculum>
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
