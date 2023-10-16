import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faFileLines } from "@fortawesome/free-solid-svg-icons";

export default function ConfigurationButtons({
  activeSection,
  setActiveSection,
}) {
  return (
    <div className="configuration">
      <SectionButton
        text="CV Content"
        icon={faFileLines}
        isActive={activeSection == "content"}
        toggle={() => setActiveSection("content")}
      />
      <SectionButton
        text="CV Layout"
        icon={faPenToSquare}
        isActive={activeSection == "layout"}
        toggle={() => setActiveSection("layout")}
      />
    </div>
  );
}

function SectionButton({ text, icon, isActive, toggle }) {
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
