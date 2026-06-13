import { useEffect, useRef, useState } from "react";
import { ASCII_FRAMES } from "./frame";
import "../../styles/home.css";

const Home = () => {
  const [frame, setFrame] = useState(ASCII_FRAMES[0]);
  const frameRef = useRef<number | null>(null)
  const lastUpdateRef = useRef(0);
  useEffect(() => {
    const texts = ASCII_FRAMES;
    const FPS = 12;
    const FRAME_INTERVAL = 1000 / FPS;

    let index = 0;

    const animate = (timestamp: number) => {
      if (timestamp - lastUpdateRef.current >= FRAME_INTERVAL) {
        index = (index + 1) % texts.length;
        setFrame(texts[index]);
        lastUpdateRef.current = timestamp;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);
  return (
    <>
      <div className="name_container">
        <span className="name">
          Bryan Antier
        </span>
        <div className="info">
          <span>
            Cebu, Philippines
          </span>
          <div className="classifications">
            <span>Software Engineer</span>
            <span>Web Developer</span>
            <span>Full-Stack Developer</span>
          </div>
        </div>
      </div>
      <div className="animated_ascii_bg">{frame}</div>
    </>
  )
}
export default Home;