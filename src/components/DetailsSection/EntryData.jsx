import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function EntryData({ data, removeData, editData }) {
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
      <div className="logo-wrapper">
        <FontAwesomeIcon icon={faTrash} onClick={() => removeData(data)} />
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editData(data)} />
      </div>
    </div>
  );
}
