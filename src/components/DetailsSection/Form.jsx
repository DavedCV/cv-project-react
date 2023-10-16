import formsEntries from "./formEntriesData";

export default function Form({ activeSection, saveData }) {
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
