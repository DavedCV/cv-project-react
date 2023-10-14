/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState } from "react";
import { faArrowRight, faDisplay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const formsData = {
  personal: ["full name", "email", "phone number", "location"],
  education: ["school name", "degree", "start date", "end date"],
  experience: ["company name", "start date", "end date", "job description"],
};

export default function Data() {
  const [activeForm, setActiveForm] = useState("personal");
  const [dataSectionHeight, setDataSectionHeight] = useState(null);

  function calcHeight(el) {
    console.log("calc");
    const height = el.offsetHeight;
    setDataSectionHeight(height);
  }

  function getNextForm() {
    const keys = Object.keys(formsData);
    const currentIndex = keys.indexOf(activeForm);
    return keys[(currentIndex + 1) % keys.length];
  }

  return (
    <div className="data-section">
      <div className="data-section-header">
        <h2>{activeForm}</h2>

        <button onClick={() => setActiveForm(getNextForm())}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <TransitionGroup>
        <CSSTransition key={activeForm} timeout={500} classNames="form">
          <Section data={formsData[activeForm]} />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

function Section({ data }) {
  return (
    <div className="form-section">
      <form>
        {data.map((info) => (
          <div key={info} className={`${info}-entry`}>
            <label htmlFor={info}>{info}</label>
            <input type="text" id={info} placeholder={`enter ${info}`}/>
          </div>
        ))}
      </form>
    </div>
  );
}
