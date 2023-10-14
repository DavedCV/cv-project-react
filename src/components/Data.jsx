/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PERSONAL_DATA = ["full name", "email", "phone number", "location"];
const EDUCATION = ["school name", "degree", "start date", "end date"];
const EXPERIENCE = [
  "company name",
  "start date",
  "end date",
  "job description",
];

export default function Data() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="data-section">
      <Section
        className="personal"
        data={PERSONAL_DATA}
        isActive={activeIndex == 0}
        toggle={() => setActiveIndex(0)}
      />
      <Section
        className="education"
        data={EDUCATION}
        isActive={activeIndex == 1}
        toggle={() => setActiveIndex(1)}
      />
      <Section
        className="experience"
        data={EXPERIENCE}
        isActive={activeIndex == 2}
        toggle={() => setActiveIndex(2)}
      />
    </div>
  );
}

function Section({ className, data, isActive, toggle }) {
  return isActive ? (
    <div
      className={`${className} active`}
      onClick={toggle()}
      onKeyUp={toggle()}
      tabIndex={0}
    >
      <div className="section-header">
        <h2>{className}</h2>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <form>
        {data.map((info) => (
          <div key={info} className={`${info}-entry`}>
            <label htmlFor={info}>{info}</label>
            <input type="text" id={info} />
          </div>
        ))}
      </form>
    </div>
  ) : (
    <div className={className} onClick={toggle} onKeyUp={toggle} tabIndex={0}>
      <div className="section-header">
        <h2>{className}</h2>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
}
