import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Curriculum from "./Curriculum";

export default function Modal(props) {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.querySelector(".curriculum-modal");
    modalRoot.addEventListener("click", props.hideModal);
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<Curriculum {...props} />, elRef.current);
}
