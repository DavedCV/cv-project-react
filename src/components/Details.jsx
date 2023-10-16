/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState } from "react";
import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const formsEntries = {
  personal: ["full name", "email", "phone number", "location"],
  education: ["school name", "degree", "start date", "end date"],
  experience: ["company name", "start date", "end date", "job description"],
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
        <h2>{activeSection}</h2>
        <button onClick={() => setActiveSection(getNextSection())}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <TransitionGroup className="details-data-wrapper">
        <CSSTransition
          key={activeSection}
          timeout={500}
          classNames="details"
        >
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

function DetailsData({ activeSection, sectionsData, setSectionsData }) {
  const [showForm, setShowForm] = useState(false);

  function saveData(e, changes) {
    e.preventDefault();

    if (changes == 0) {
      if (setShowForm) setShowForm(false);
      return;
    }

    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());

    console.log(obj);
    changes;
    const newSectionsData = {
      ...sectionsData,
      [activeSection]: [...sectionsData[activeSection], obj],
    };

    setSectionsData(newSectionsData);

    if (setShowForm) setShowForm(false);
  }

  function removeData(data) {
    const filteredSectionData = sectionsData[activeSection].filter(
      (info) => info != data,
    );
    const newSectionData = {
      ...sectionsData,
      [activeSection]: filteredSectionData,
    };

    setSectionsData(newSectionData);
  }

  return (
    <div className="details-data">
      {activeSection === "personal" || showForm ? (
        <Form activeSection={activeSection} saveData={saveData} />
      ) : (
        <>
          {sectionsData[activeSection].map((data) => (
            // eslint-disable-next-line react/jsx-key
            <EntryData data={data} removeData={removeData} />
          ))}
          <button onClick={() => setShowForm(!showForm)}>Add new data</button>
        </>
      )}
    </div>
  );
}

function Form({ activeSection, saveData }) {
  const data = formsEntries[activeSection];
  let changes = 0;

  return (
    <div className="form-data">
      <form onSubmit={(e) => saveData(e, changes)}>
        {data.map((info) => (
          <div
            key={info}
            className={`${info}-entry`}
            style={{ width: 100 + "%" }}
          >
            <label htmlFor={info}>{info}</label>
            <input
              type="text"
              id={info}
              placeholder={`enter ${info}`}
              name={info}
              onChange={() => (changes += 1)}
            />
          </div>
        ))}
        <button type="submit">Save info</button>
      </form>
    </div>
  );
}

function EntryData({ data, removeData }) {
  return (
    <div className="entry-data">
      <div className="data-wrapper">
        {Object.entries(data).map((info) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <span className="title">{info[0] + ": "}</span>
            {info[1]}
          </div>
        ))}
      </div>
      <FontAwesomeIcon icon={faTrash} onClick={() => removeData(data)} />
    </div>
  );
}
