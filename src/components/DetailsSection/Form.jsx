import { useState } from "react";
import formsEntries from "./formEntriesData";

export default function Form({ activeSection, saveData, entriesData }) {
  const data = formsEntries[activeSection];
  const [changes, setChanges] = useState(0);
  const [entriesDataCopy, setEntriesDataCopy] = useState({ ...entriesData });

  function onChangeHandle(e, info) {
    setChanges(changes + 1);
    setEntriesDataCopy({ ...entriesDataCopy, [info]: e.target.value });
  }

  return (
    <div className="form-data">
      <form onSubmit={(e) => saveData(e, entriesDataCopy, changes)}>
        {data.map((info) => (
          <div
            key={info}
            className={`${info}-entry`}
            style={{ width: 100 + "%" }}
          >
            <label htmlFor={info}>{info}</label>
            {info == "personal statement" ? (
              <textarea
                name={info}
                id={info}
                placeholder={`enter ${info}`}
                value={entriesDataCopy[info] ?? ""}
                onChange={(e) => onChangeHandle(e, info)}
              ></textarea>
            ) : (
              <input
                type="text"
                id={info}
                placeholder={`enter ${info}`}
                name={info}
                onChange={(e) => onChangeHandle(e, info)}
                value={entriesDataCopy[info] ?? ""}
              />
            )}
          </div>
        ))}
        <button type="submit">Save info</button>
      </form>
    </div>
  );
}
