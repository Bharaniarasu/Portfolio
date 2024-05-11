import { Component } from "react";
import CV from "../../assets/files/Barani_T.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a className="btn btn-download btn-warning" href={CV} download>
        Download CV
      </a>
      <a className="btn btn-contact btn-outline-warning" href="#contact">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
