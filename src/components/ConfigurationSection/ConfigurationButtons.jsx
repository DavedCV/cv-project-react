import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileArrowDown,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { jsPDF } from "jspdf";

export default function ConfigurationButtons({ setSectionsData }) {
  function loadSampleContent() {
    const sampleData = {
      personal: [
        {
          "full name": "John Doe",
          email: "johndoe@email.com",
          position: "Software Engineer",
          "phone number": "123-456-7890",
          location: "New York, NY",
          linkedin: "https://www.linkedin.com/in/johndoe",
          "personal statement":
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus pariatur praesentium libero labore nihil, non dolore voluptates blanditiis soluta voluptas ducimus aliquam ipsum reprehenderit laborum ipsam earum delectus corrupti deleniti odio. Modi sed tempore eligendi minus porro. Sunt doloremque laboriosam quia at eveniet animi fugiat perspiciatis ipsa in. Delectus.",
        },
      ],
      education: [
        {
          "school name": "University of XYZ",
          degree: "Bachelor of Science in Computer Science",
          "start date": "2016",
          "end date": "2020",
        },
      ],
      experience: [
        {
          position: "Software Developer",
          "company name": "Tech Solutions Inc.",
          "start date": "2020",
          "end date": "2022",
          "job description":
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus pariatur praesentium libero labore nihil, non dolore voluptates blanditiis soluta voluptas ducimus aliquam ipsum reprehenderit laborum ipsam earum delectus corrupti deleniti odio. Modi sed tempore eligendi minus porro. Sunt doloremque laboriosam quia at eveniet animi fugiat perspiciatis ipsa in. Delectus.",
        },
      ],
      skills: [
        { skill: "JavaScript" },
        { skill: "React" },
        { skill: "Node.js" },
        { skill: "HTML/CSS" },
        { skill: "SQL" },
      ],
    };

    setSectionsData(sampleData);
  }

  function downloadCV() {
    const report = new jsPDF("portrait", "pt", "a4");

    // Create a clone of the HTML element to render within the PDF
    const htmlElement = document.querySelector(".curriculum");
    const clonedElement = htmlElement.cloneNode(true);

    // Calculate the scale factor to fit within the page
    const pageWidth = report.internal.pageSize.getWidth();
    const scaleFactor = pageWidth / 800;

    // Scale the cloned element
    clonedElement.style.transform = `scale(${scaleFactor})`;
    clonedElement.style.transformOrigin = "top left";

    // Add the cloned HTML element to the PDF
    report
      .html(clonedElement, {
        x: 0,
        y: 0,
      })
      .then(() => {
        // Save the PDF
        report.save("cv.pdf");
      });
  }

  return (
    <div className="configuration">
      <SectionButton
        text="CV Sample Content"
        icon={faFileLines}
        onClickHandle={() => loadSampleContent()}
      />
      <SectionButton
        text="Download CV"
        icon={faFileArrowDown}
        onClickHandle={() => downloadCV()}
      />
    </div>
  );
}

function SectionButton({ text, icon, onClickHandle }) {
  return (
    <button className={"configuration-option"} onClick={onClickHandle}>
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </button>
  );
}
