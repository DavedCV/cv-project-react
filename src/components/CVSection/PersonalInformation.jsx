export default function PersonalInfo({ personalData }) {
  return (
    <div className="personal-info">
      <h1 className="fullname-cv">{personalData["full name"]}</h1>
      <h2 className="position-cv">{personalData["position"]}</h2>
      <div>
        {Object.keys(personalData)
          .filter(
            (data) =>
              data != "full name" &&
              data != "personal statement" &&
              data != "id",
          )
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
