import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function EntryData({ data, removeData }) {
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
