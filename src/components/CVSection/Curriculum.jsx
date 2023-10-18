import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience";
import Education from "./Education";

export default function Curriculum({ sectionsData }) {
  const personalData = sectionsData["personal"][0] ?? [];
  const education = sectionsData["education"] ?? [];
  const experience = sectionsData["experience"] ?? [];
  const skills = sectionsData["skills"] ?? [];

  return (
    <div className="curriculum">
      <PersonalInformation personalData={personalData} />
      <SectionDivider text="Profesional Experience" />
      <Experience experience={experience} />
      <SectionDivider text="Education" />
      <Education education={education} />
      <SectionDivider text="Skills" />
      <Skills skills={skills} />
    </div>
  );
}

function SectionDivider({ text }) {
  return <h2 className="section-header">{text}</h2>;
}

function Skills({ skills }) {
  return (
    <div className="skills-info">
      <ul>
        {skills.map((skill) => (
          <li key={skill["skill"]}>{skill["skill"]}</li>
        ))}
      </ul>
    </div>
  );
}
