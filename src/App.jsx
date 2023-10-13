import Configuration from "./components/Configuration";
import Data from "./components/Data";
import Curriculum from "./components/Curriculum";
import "./styles/App.css"

export default function App() {
  return (
    <div className="main">
      <Configuration />
      <Data />
      <Curriculum />
    </div>
  );
}
