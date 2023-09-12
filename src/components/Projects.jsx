import {LiaProjectDiagramSolid} from "react-icons/lia";
import Title from "./Title";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-300 p-8">
      <div className="max-w-6xl m-auto">
        <Title>Projects</Title>
        <LiaProjectDiagramSolid size="5rem" color="rgb(185, 28, 28)"/>
      </div>
    </section>
  );
};

export default Projects;
