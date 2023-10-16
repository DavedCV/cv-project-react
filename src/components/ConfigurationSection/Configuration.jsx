import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const options = ["content", "layout"];

export default function Configuration() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="configuration">
      <Section
        text="CV Content"
        icon={faFileLines}
        isActive={activeIndex == 0}
        toggle={() => setActiveIndex(0)}
      />
      <Section
        text="CV Layout"
        icon={faPenToSquare}
        isActive={activeIndex == 1}
        toggle={() => setActiveIndex(1)}
      />
    </div>
  );
}

function Section({ text, icon, isActive, toggle }) {
  return (
    <button
      className={"configuration-option" + (isActive ? " active" : "")}
      onClick={() => toggle()}
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </button>
  );
}
