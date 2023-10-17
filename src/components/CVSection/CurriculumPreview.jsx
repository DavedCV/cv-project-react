import Curriculum from "./Curriculum";

export default function CurriculumPreview(props) {
  return (
    <div className="curriculum-preview">
      <Curriculum {...props}></Curriculum>
    </div>
  );
}
