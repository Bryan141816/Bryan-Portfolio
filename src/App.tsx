import "./App.css";
import githubaccount from "./assets/repo.svg";
import mail from "./assets/mail.svg";
import github_logo from "./assets/github-icon.svg";
import circles from "./assets/circles.svg";
import arrow from "./assets/Arrow.svg";
import { useState } from "react";
function App() {
  const formattedDate = new Date()
    .toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    })
    .replace(/\//g, "-");

  const [selectedContent, setSelectedContent] = useState("skills");

  const updateSelected = (type: string) => {
    if (selectedContent !== type) {
      setSelectedContent(type);
    }
  };
  return (
    <>
      <div className="card-container">
        <header className="header">
          <div className="date-container">{formattedDate}</div>
          <div className="portfolio-version-container">
            <h1>PORTFOLIO</h1>
            <div className="version">
              <span>Version:</span>
              <span>1.0</span>
            </div>
          </div>
        </header>
        <span className="a_simple">a_simple_site_about_me</span>
        <div className="front-page">
          <div className="qr-container">
            <img src={githubaccount} className="github_account_qr" />
          </div>

          <div className="basic-info">
            <h2>BRYAN ANTIER</h2>
            <span>02-20-04</span>
            <div className="box-x-container">
              <div className="x-box"></div>
              <div className="x-box"></div>
              <div className="x-box"></div>
            </div>
          </div>
        </div>
        <span className="random-hash">
          A7F2C9D4-3E8B-4A61-9D5F-0C2E7B8A1F64
        </span>
        <div className="summary-socials-container">
          <div className="summary-head">
            <div className="subtitle-container">
              <h3 className="subtitle">SUMMARY</h3>
            </div>
            <span>[0XA]</span>
          </div>
          <p>
            A 4th-year BSIT student having practical experience in desktop
            software, mobile development, and full-stack programming. competent
            in Flutter, Django, React, Kotlin, Python, JavaScript, and
            TypeScript. knowledgeable about developing practical applications,
            such as POS systems, mobile billing tools, and routing applications,
            for private and local enterprises. strong familiarity with
            databases, DevOps technologies, REST APIs, and contemporary
            development processes. 2026 is the graduation year.
          </p>
          <div className="summary-bottom">
            <div className="stripe bottom"></div>
            <div>
              <img src={arrow} id="arrow-orient" />
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="content-container">
          <div className="summary-head">
            <div className="subtitle-container">
              <div className="selector">
                <button
                  className={`subtitle ${selectedContent !== "skills" ? "unselected" : ""}`}
                  onClick={() => updateSelected("skills")}
                >
                  SKILLS
                </button>
                <button
                  className={`subtitle ${selectedContent === "skills" ? "unselected" : ""}`}
                  onClick={() => updateSelected("projects")}
                >
                  PROJECTS
                </button>
              </div>
            </div>
            <span>[0XB]</span>
          </div>

          <div className="content">
            {selectedContent === "skills" ? (
              <>
                <div>
                  <span>[PROGRAMMING LANGUAGES]</span>
                  <p>
                    <img src={arrow} />
                    Python, JavaScript, TypeScript
                  </p>
                </div>
                <div>
                  <span>[FRONT END]</span>
                  <p>
                    <img src={arrow} />
                    React, HTML, CSS, Tailwind CSS
                  </p>
                </div>
                <div>
                  <span>[BACK END]</span>
                  <p>
                    <img src={arrow} />
                    Django, FastAPI, Node.js
                  </p>
                </div>
                <div>
                  <span>[DATABASE]</span>
                  <p>
                    <img src={arrow} />
                    MySQL, PostgreSQL, Firebase
                  </p>
                </div>
                <div>
                  <span>[TOOLS & DEVOPS]</span>
                  <p>
                    <img src={arrow} />
                    Docker, Git, Figma, CI/CD
                  </p>
                </div>
                <div>
                  <span>[WORKING KNOWLEDGE]</span>
                  <p>
                    <img src={arrow} />
                    C#, Kotlin, Flutter, Linux
                  </p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <span>[POINT-OF-SALE SYSTEM (COFFE SHOP)]</span>
                  <p>
                    <img src={arrow} />
                    C#, .NET WinForms - Windows Desktop Application
                  </p>
                </div>
                <div>
                  <span>[DELIVERY ROUTE OPTIMIZATION APP]</span>
                  <p>
                    <img src={arrow} />
                    Flutter - Cross-Platform Mobile Application (Android/iOS)
                  </p>
                </div>
                <div>
                  <span>[WATER BILLING MOBILE APP]</span>
                  <p>
                    <img src={arrow} />
                    Kotlin — Android Application{" "}
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="socials">
            <div className="socials-content">
              <div className="summary-head">
                <div className="subtitle-container">
                  <h3 className="subtitle">SOCIALS</h3>
                </div>
                <span>[0XC]</span>
              </div>
              <div className="social-links">
                <div className="social-data">
                  <span>[EMAIL]</span>
                  <p>
                    <img src={mail} />
                    bryanantier7@gmail.com
                  </p>
                </div>
                <div className="social-data">
                  <span>[GITHUB]</span>
                  <a href="https://github.com/Bryan141816">
                    <img src={github_logo} />
                    Bryan141816
                  </a>
                </div>
              </div>
            </div>
            <div className="random-square">
              <img src={circles} />
            </div>
          </div>
          <div className="summary-bottom">
            <div className="stripe bottom"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
