import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience";
import Education from "./Education";

export default function Curriculum({ sectionsData }) {
  const personalData = sectionsData["personal"][0];
  const education = sectionsData["education"];
  const experience = sectionsData["experience"];

  console.log(personalData);

  return (
    <div className="curriculum">
      <PersonalInformation personalData={personalData} />
      <SectionDivider text="Profesional Experience" />
      <Experience experience={experience} />
      <SectionDivider text="Education" />
      <Education education={education} />
    </div>
  );
}

function SectionDivider({ text }) {
  return <h2 className="section-header">{text}</h2>;
}
