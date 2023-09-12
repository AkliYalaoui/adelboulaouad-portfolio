import { BiCertification } from "react-icons/bi";
import Title from "./Title";
import nlp from "../assets/nlp.jpeg";
import deep from "../assets/deep.jpeg";
import applied from "../assets/applied.jpeg";
import fund from "../assets/fund.jpeg";

const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-6xl m-auto">
        <Title>Certifications</Title>
        <BiCertification size="5rem" color="rgb(185, 28, 28)" />
        <div className="mt-8 grid grid-cols-2 gap-4">
          <article className="text-center">
            <img
              src={nlp}
              className="w-96 h-56 m-auto"
              alt="Natural Language Processing"
            />
            <h3 className="font-bold text-2xl text-slate-900 mt-2">
              Natural Language Processing
            </h3>
            <div className="mt-4 text-center">
              <a
                className=" px-2 py-1 font-semibold rounded bg-red-700 text-white"
                href="./nlp.pdf"
                download="NLP.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
          </article>
          <article className="text-center">
            <img src={deep} className="w-96 h-56 m-auto" alt="Deep learning" />
            <h3 className="font-bold text-2xl text-slate-900 mt-2">
              Deep Learning
            </h3>
            <div className="mt-4 text-center">
              <a
                className=" px-2 py-1 font-semibold rounded bg-red-700 text-white"
                href="./deep.pdf"
                download="Deep Learning.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
          </article>
          <article className="text-center">
            <img
              src={applied}
              className="w-96 h-56 m-auto"
              alt="Applied Data Science with
Python"
            />
            <h3 className="font-bold text-2xl text-slate-900 mt-2">
              Applied Data Science with Python
            </h3>
            <div className="mt-4 text-center">
              <a
                className=" px-2 py-1 font-semibold rounded bg-red-700 text-white"
                href="./applied.pdf"
                download="applied.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
          </article>
          <article className="text-center">
            <img
              src={fund}
              className="w-96 h-56 m-auto"
              alt="Fundamentals of Deep Learning"
            />
            <h3 className="font-bold text-2xl text-slate-900 mt-2">
            Fundamentals of Deep Learning
            </h3>
            <div className="mt-4 text-center">
              <a
                className=" px-2 py-1 font-semibold rounded bg-red-700 text-white"
                href="./fund.pdf"
                download="fund.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
