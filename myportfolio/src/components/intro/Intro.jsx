import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped"; // Check if this import is correct
export default function Intro() {
  const textRef = useRef(null);
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay:1500,
      backSpeed:60,
      strings: ["Computer Engineer", "Java Developer", "Android Developer"]
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Surajr.png" alt="loading" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Suraj Raut</h1>
          <h3>
            BE <span ref={textRef}></span>
          </h3>
          <div className="connect">

              <a href="assets/Resume.pdf" download="Suraj_Raut_Resume" rel="noreferrer noopener">Hire me</a>

              <a id="myid" href="https://www.linkedin.com/in/suraj-raut-a8a2111b8/" target="_blank" rel="noreferrer noopener">
                <img id="img" src="assets/into/linkedin.png" alt="" />
              </a>
              <a id="myid" href="https://www.instagram.com/suraj_raut_211/" target="_blank" rel="noreferrer noopener">
                <img id="img" src="assets/into/instagram.png" alt="" />
              </a>
              <a id="myid" href="https://github.com/Surajraut123" target="_blank" rel="noreferrer noopener">
                <img id="img" src="assets/into/git.png" alt="" />
              </a>
          </div>

        </div>

      </div>
    </div>
  );
}
