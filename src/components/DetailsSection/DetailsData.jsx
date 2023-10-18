import { useState } from "react";
import Form from "./Form";
import EntryData from "./EntryData";
import { v4 as uuidv4 } from "uuid";

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
      if (isEditing) setIsEditing(null);
      return;
    }

    let prevData = isEditing
      ? sectionsData[activeSection].filter((prev) => prev.id != data.id)
      : sectionsData[activeSection];

    if (!isEditing) {
      data["id"] = uuidv4();
    } else {
      setIsEditing(null);
    }

    const activeSectionData =
      activeSection == "personal" ? [data] : [...prevData, data];

    const newSectionsData = {
      ...sectionsData,
      [activeSection]: activeSectionData,
    };

    setSectionsData(newSectionsData);

    console.log(newSectionsData);

    if (setShowForm) setShowForm(false);
  }

  function removeData(data) {
    const filteredSectionData = sectionsData[activeSection].filter(
      (info) => info.id != data.id,
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
      {showForm ? (
        <Form
          activeSection={activeSection}
          saveData={saveData}
          entriesData={
            isEditing
              ? isEditing
              : activeSection == "personal"
              ? sectionsData[activeSection][0]
              : null
          }
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
