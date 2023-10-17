export default function Curriculum({ sectionsData }) {
  const personalData = sectionsData["personal"][0];
  const education = sectionsData["education"];
  const experience = sectionsData["experience"];

  console.log(personalData);

  return (
    <div className="curriculum">
      <PersonalInfo personalData={personalData} />
      <h2 className="section-header">Profesional Experience</h2>
      <Experience experience={experience} />
    </div>
  );
}

function Experience({ experience }) {
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

function PersonalInfo({ personalData }) {
  return (
    <div className="personal-info">
      <h1 className="fullname-cv">{personalData["full name"]}</h1>
      <h2 className="position-cv">{personalData["position"]}</h2>
      <div>
        {Object.keys(personalData)
          .filter((data) => data != "full name" && data != "personal statement")
          .map((data) => (
            <p
              key={`${data.replace(" ", "")}-cv`}
              className={`${data.replace(" ", "")}-cv`}
            >
              <span>{data}: </span>
              {personalData[data]}
            </p>
          ))}
      </div>
      <p className="personalstatement-cv">
        {personalData["personal statement"]}
      </p>
    </div>
  );
}
