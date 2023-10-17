export default function Curriculum({ sectionsData }) {
  const personalData = sectionsData["personal"][0];
  const education = sectionsData["education"];
  const experience = sectionsData["experience"];

  console.log(personalData);

  return (
    <div className="curriculum">
      <div className="personal-info">
        <h1 className="fullname-cv">{personalData["full name"]}</h1>
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
        <p className="personalstatement-cv">{personalData["personal statement"]}</p>
      </div>
    </div>
  );
}
