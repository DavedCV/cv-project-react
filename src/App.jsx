import ConfigurationButtons from "./components/ConfigurationButtons";
import Details from "./components/DetailsSection/Details";
import Curriculum from "./components/Curriculum";
import "./styles/App.css";
import { useState } from "react";

export default function App() {
  const [sectionsData, setSectionsData] = useState({
    personal: [],
    education: [],
    experience: [],
  });
  const [activeSection, setActiveSection] = useState("content");

  return (
    <div className="main">
      <ConfigurationButtons
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      {activeSection === "content" ? (
        <Details
          sectionsData={sectionsData}
          setSectionsData={setSectionsData}
        />
      ) : null}
      <Curriculum />
    </div>
  );
}
