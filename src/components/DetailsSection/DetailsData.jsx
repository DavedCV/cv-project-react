import { useState } from "react";
import Form from "./Form";
import EntryData from "./EntryData";

export default function DetailsData({ activeSection, sectionsData, setSectionsData }) {
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
