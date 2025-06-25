import React from "react";
import { useState } from "react";
import Reveal from "./Reveal";
import PetStop from "./projects/PetStop";
import "../styles/projects.css";
import PalettePro from "./projects/PalettePro";
import YumSpot from "./projects/YumSpot";
import ExpenseSplitter from "./projects/ExpenseSplitter";
import SolarBooker from "./projects/SolarBooker";
import ConsiderateCarrot from "./projects/ConsiderateCarrot";
import AiQ from "./projects/AiQ";
import Resourcery from "./projects/Resourcery";

const Projects = ({ projectRef }) => {
  return (
    <div className="projects-container" ref={projectRef}>
      <h1 className="projects-header">Projects</h1>
      <PetStop />
      <PalettePro />
      <YumSpot />
      <ExpenseSplitter />
      <SolarBooker />
      <ConsiderateCarrot />
      <AiQ />
      <Resourcery />
    </div>
  );
};

export default Projects;
