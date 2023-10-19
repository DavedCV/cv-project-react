import ConfigurationButtons from "./components/ConfigurationSection/ConfigurationButtons";
import Details from "./components/DetailsSection/Details";
import CurriculumPreview from "./components/CVSection/CurriculumPreview";
import "./styles/App.css";
import { useState } from "react";
import Curriculum from "./components/CVSection/Curriculum";

export default function App() {
  const [sectionsData, setSectionsData] = useState({
    personal: [],
    education: [],
    experience: [],
    skills: [],
  });

  return (
    <div className="main">
      <ConfigurationButtons setSectionsData={setSectionsData} />
      <CurriculumPreview sectionsData={sectionsData} />
      <Curriculum sectionsData={sectionsData} />
      <Details sectionsData={sectionsData} setSectionsData={setSectionsData} />
    </div>
  );
}
