import { useState } from "react";
import {
  faArrowRight,
  faUserGraduate,
  faBriefcase,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import DetailsData from "./DetailsData";
import formsEntries from "./formEntriesData";

const sectionLogo = {
  education: <FontAwesomeIcon icon={faUserGraduate} />,
  experience: <FontAwesomeIcon icon={faBriefcase} />,
  personal: <FontAwesomeIcon icon={faPerson} />,
};

export default function Details({ sectionsData, setSectionsData }) {
  const [activeSection, setActiveSection] = useState("personal");

  function getNextSection() {
    const keys = Object.keys(formsEntries);
    const currentIndex = keys.indexOf(activeSection);
    return keys[(currentIndex + 1) % keys.length];
  }

  return (
    <div className="details-section">
      <div className="details-section-header">
        <h2>{sectionLogo[activeSection]} {activeSection}</h2>
        <button onClick={() => setActiveSection(getNextSection())}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <TransitionGroup className="details-data-wrapper">
        <CSSTransition key={activeSection} timeout={500} classNames="details">
          <DetailsData
            activeSection={activeSection}
            sectionsData={sectionsData}
            setSectionsData={setSectionsData}
          />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
