export default function Education({ education }) {
  return (
    <div className="education-info">
      {education.map((study) => (
        <div
          className="education-cv"
          key={`${study["degree"]}-${study["school name"]}-cv`}
        >
          <div className="education-date-cv">
            <p>
              {study["start date"]} - {study["end date"]}
            </p>
          </div>
          <div className="education-details-cv">
            <h3>{study["degree"]}</h3>
            <p>{study["school name"]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
