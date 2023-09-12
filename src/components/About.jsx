import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import Title from "./Title";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-4xl m-auto">
        <Title>About Me</Title>
        <BiSolidQuoteLeft size="5rem" color="rgb(185, 28, 28)" />
        <div className="space-y-4 my-4">
          <p className="text-justify text-xl text-slate-800">
            I am Boulaouad Adel, a 22-year-old graduate engineer from the Higher
            School of CS (ESI Alger),and a Machine Learning Engineer Intern at
            AlleyCorp Nord. I also have an AI master at Université Laval.
          </p>
          <p className="text-justify text-xl text-slate-800">
            I have worked on several projects to implement strong machine
            learning pipelines that have helped improve our client's businesses.
            My focus is on using data collection, deployment, and monitoring to
            drive results. I have experience with technologies such as Python
            and its frameworks, and different MLOps stacks (ZenML, ClearML,
            MLflow, WandB, Kubeflow ...)
          </p>
          <p className="text-justify text-xl text-slate-800">
            One of my strengths is my ability to manage the entire lifecycle of
            a machine learning project. While many people are interested in
            machine learning, few can effectively manage the cycle of a project
            from start to finish. I have learned through my experience how to
            lead projects to success, going beyond just training a model to
            maintaining and updating it in real business scenarios.
          </p>
          <p className="text-justify text-xl text-slate-800">
            I am also committed to staying up to date with the latest
            developments in AI. I regularly keep track of the fast-paced changes
            in the field, and I am currently working on internal projects
            involving LLM fine-tuning. My long-term goal is to become one of the
            AI leaders in Montreal.
          </p>
        </div>
        <div className="flex justify-end">
          <BiSolidQuoteRight size="5rem" color="rgb(185, 28, 28)" />
        </div>
      </div>
    </section>
  );
};

export default About;
