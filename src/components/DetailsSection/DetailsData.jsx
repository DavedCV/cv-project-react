import { useState } from "react";
import Form from "./Form";
import EntryData from "./EntryData";

export default function DetailsData({
  activeSection,
  sectionsData,
  setSectionsData,
}) {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(null);

  function saveData(e, data, changes) {
    e.preventDefault();

    if (changes == 0) {
      if (setShowForm) setShowForm(false);
      return;
    }

    const activeSectionData =
      activeSection == "personal"
        ? [data]
        : [...sectionsData[activeSection], data];

    const newSectionsData = {
      ...sectionsData,
      [activeSection]: activeSectionData,
    };

    console.log(newSectionsData);

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

  function editData(data) {
    setShowForm(true);
    setIsEditing(data);
  }

  return (
    <div className="details-data">
      {activeSection === "personal" || showForm ? (
        <Form
          activeSection={activeSection}
          saveData={saveData}
          entriesData={isEditing ? isEditing : sectionsData[activeSection][0]}
        />
      ) : (
        <>
          {sectionsData[activeSection].map((data) => (
            // eslint-disable-next-line react/jsx-key
            <EntryData
              data={data}
              removeData={removeData}
              editData={editData}
            />
          ))}
          <button onClick={() => setShowForm(!showForm)}>Add new data</button>
        </>
      )}
    </div>
  );
}
