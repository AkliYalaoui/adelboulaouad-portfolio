import {VscChecklist} from "react-icons/vsc";
import Title from "./Title";

const my_skills = {
  "Software Dev": [
    "Flutter",
    "Html",
    "Css",
    "Js",
    "Node",
    "D3.js",
    "React",
    "Bootstrap",
  ],
  NLP: ["HuggingFace", "Transformers", "Spacy", "NLTK", "LLMs"],
  "Computer vision": ["Detectron", "VinVl", "Yolov7"],
  DBMS: ["MySQL", "Oracle", "PostgreSQL", "MongoDB"],
  Programming: ["Ruby", "Java", "C", "C++", "R", "Matlab"],
  Python: [
    "Pandas",
    "Numpy",
    "Matplotlib",
    "Scikit-learn",
    "Pytorch",
    "Tensorflow",
    "Optuna",
    "Keras",
  ],
  BI: ["Power BI", "Tableau", "Talend", "SAS"],
  MLOPS: [
    "TFX",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub actions",
    "Apache Spark",
    "Beam",
    "Airflow",
    "MLFlow",
    "ZenML",
    "Kubeflow",
    "Cloud (AWS, GCP)",
  ],
};
const Skill = () => {
  return (
    <section id="skills" className="min-h-screen bg-gray-300 p-8">
      <div className="max-w-6xl m-auto">
        <Title>My Skills</Title>
        <VscChecklist size="5rem" color="rgb(185, 28, 28)"/>
        <div className="grid grid-cols-4 gap-4 mt-6">
          {Object.keys(my_skills).map((skill) => (
            <article
              key={skill}
              className="p-4 bg-slate-200 rounded-md shadow-md transform hover:scale-110"
            >
              <h4 className="text-center font-semibold text-slate-900 text-4xl mb-4">
                <span className="text-red-700">#</span> {skill}
              </h4>
              <div className="flex justify-center items-center gap-2 flex-wrap">
                {my_skills[skill].map((item) => (
                  <span key={item} className="p-1 border border-slate-700 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
