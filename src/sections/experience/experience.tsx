import "../../styles/experience.css";
import { LGUASCII, RAFIASCIITEXT, WorkExperienceASCII } from "./experrience_asii_text";
const Experience = () => {
  return (
    <div className="experience_container">
      <div className="experience_header">
        {WorkExperienceASCII}
      </div>
      <div className="job">
        <h3>JAN 2026 - JUN 2026</h3>
        <div content="RAFI MFI">{RAFIASCIITEXT}</div>
        <span>INTERN SOFTWARE DEVELOPER</span>
      </div>
      <div className="job job2">
        <h3>JUL 2024 - AUG 2024</h3>
        <div>{LGUASCII}</div>
        <span>Freelance Mobile Developer</span>
      </div>
    </div>
  )
}
export default Experience;