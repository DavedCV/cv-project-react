export default function Experience({ experience }) {
  return (
    <div className="experience-info">
      {experience.map((job) => (
        <div
          className="experience-cv"
          key={`${job["position"]}-${job["company name"]}-cv`}
        >
          <div className="job-date-cv">
            <p>
              {job["start date"]} - {job["end date"]}
            </p>
          </div>
          <div className="job-details-cv">
            <h3>{job["position"]}</h3>
            <h4>{job["company name"]}</h4>
            <p>{job["job description"]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
