import { GetInTouchASCII } from "./get_in_touch_ascii_text";
import { EmailIcon, GITHubIcon, LinkInIcon } from "./get_in_touch_icon";
import "../../styles/get_in_touch.css";
const GetInTouch = () => {
  return (
    <div className="get_in_touch_container">
      <div className="get_in_touch_header">
        {GetInTouchASCII}
      </div>
      <div className="horizontal-container">
        <div className="icons">
          <div style={{ color: "#ff6600" }}>
            {EmailIcon}
          </div>
        </div>
        <span className="get_in_touch_text">
          bryanantier7@gmail.com
        </span>
      </div>
      <div className="horizontal-container">
        <div className="icons">
          <div style={{ color: "#ffffff" }}>
            {GITHubIcon}
          </div>
        </div>
        <span className="get_in_touch_text">
          <a href="https://github.com/Bryan141816">Bryan141816</a>
        </span>
      </div>
      <div className="horizontal-container">
        <div className="icons">
          <div style={{ color: "#001aff" }}>
            {LinkInIcon}
          </div>
        </div>
        <span className="get_in_touch_text">
          <a href="https://www.linkedin.com/in/bryan-antier-6637a540b/">Bryan Antier</a>
        </span>
      </div>
    </div>
  )
}
export default GetInTouch;