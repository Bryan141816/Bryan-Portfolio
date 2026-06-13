import { SkillsAscii } from "./skills_ascii";
import { CSharpIcon, CSSIcon, DockerIcon, FastAPIIcon, FigmaIcon, FirebaseIcon, FlutterIcon, GitIcon, HtmlLogo, JSIcon, NodeJsIcon, PythonIcon, ReactIcon, ShadCnIcon, SQLIcon, TypeScriptIcon } from "./skills_icons";
import "../../styles/skills.css";

const Skills = () => {
  return (
    <div className="skills_main_container ">
      <div className="experience_header">
        {SkillsAscii}
      </div>
      <div className="skills_container">
        <div className="skills_icon">
          <div style={{ color: "#ff6600" }}>
            {HtmlLogo}
          </div>
          <span>HTML</span>
        </div>
        <div className="skills_icon">
          <div style={{ color: "#0026ff" }}>
            {CSSIcon}
          </div>
          <span>CSS</span>
        </div>
        <div className="skills_icon">
          <div style={{ color: "#327ac7" }}>
            {TypeScriptIcon}
          </div>
          <span>TypeScript</span>
        </div>
        <div className="skills_icon">
          <div style={{ color: "#ffdd00" }}>
            {JSIcon}
          </div>
          <span>JavaScript</span>
        </div>
        <div className="skills_icon">
          <div style={{ color: "#007bff" }}>
            {PythonIcon}
          </div>
          <span>Python</span>
        </div>
        <div className="skills_icon">
          <div style={{ color: "#ff00ea" }}>
            {CSharpIcon}
          </div>
          <span>C#</span>
        </div>
        <div className="skills_icon">
          <div style={{ color: "#0011ff" }}>
            {SQLIcon}
          </div>
          <span>SQL</span>
        </div>
        <div className="skills_icon">
          <div style={{ color: "#6dacff" }}>
            {ReactIcon}
          </div>
          <span>React</span>
        </div>
        <div className="skills_icon">
          <div style={{ color: "#006eff" }}>
            {FlutterIcon}
          </div>
          <span>Flutter</span>
        </div>
        <div className="skills_icon">
          <div style={{ color: "#009687" }}>
            {FastAPIIcon}
          </div>
          <span>FastAPI</span>
        </div>
        <div className="skills_icon">
          <div style={{ color: "#ffffff" }}>
            {ShadCnIcon}
          </div>
          <span>Shadcn</span>
        </div>
        <div className="skills_icon">
          <div style={{ color: "#129c00" }}>
            {NodeJsIcon}
          </div>
          <span>NodeJs</span>
        </div>
        <div className="skills_icon">
          <div style={{ color: "#f0553a" }}>
            {GitIcon}
          </div>
          <span>Git</span>
        </div>
        <div className="skills_icon">
          <div style={{ color: "#ff7300" }}>
            {FirebaseIcon}
          </div>
          <span>Firebase</span>
        </div>
        <div className="skills_icon">
          <div style={{ color: "#001aff" }}>
            {DockerIcon}
          </div>
          <span>Docker</span>
        </div>
        <div className="skills_icon">
          <div style={{ color: "#ffffff" }}>
            {FigmaIcon}
          </div>
          <span>Figma</span>
        </div>

      </div>
    </div>
  )
}
export default Skills;