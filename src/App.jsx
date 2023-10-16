import Configuration from "./components/Configuration";
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

  return (
    <div className="main">
      <Configuration />
      <Details sectionsData={sectionsData} setSectionsData={setSectionsData} />
      <Curriculum />
    </div>
  );
}
