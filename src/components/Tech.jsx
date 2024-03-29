import React from "react";
import './style/Tech.css'
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-9'>
      {technologies.map((technology) => (
        <div className='containerr flex items-center justify-center' key={technology.name}>
          <img src={technology.icon} alt="icon" className="image"/>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");