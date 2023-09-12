import {IoMdPaper} from "react-icons/io";
import Title from "./Title";

const papers = [
  {
    title:
      " A Q-learning based genetic algorithm : a novel hybrid approach to solve community detection problem",
    abstract:
      "Community detection in social networks is an NP- hard search problem, and many metaheuristics have been proposed to solve it. One of them is to apply population-based metaheuristics, such as genetic algorithms. The problem with these methods, which evolve a population through generations, is the impact of the initial population on the quality of the results and the execution time. Indeed, the initial population must be generated in an intelligent way so as to ensure that it contains good quality solutions and that it is diverse. In this paper, we propose a new hybrid method using the k-means algorithm to generate a part of the initial population with the help of reinforcement learning to determine the best K-parameters and the distance used for the k-means algorithm. The newly proposed hybrid approach performs well on synthetic and real instances.",
    keywords:
      " Community detection, Machine learning, Meta- heuristics, Genetic Algorithms, K-means, Reinforcement learning, Q-Learning.",
    authors:
      "Akli YALAOUI, Mohamed Islem KARABERNOU, Adel BOULAOUAD, Sarah ABCHICHE, Mustapha Ayoub BELOUADAH, ,Mohamed DJILANI.",
    link: "./ICTAI-paper-Q-learning-based-genetic-algorithm-a-novel-hybrid-approach-to-solve-community-detection-.pdf",
    download:
      "A-Q-learning-based-genetic-algorithm-a-novel-hybrid-approach-to-solve-community-detection-problem.pdf",
  },
  {
    title:
      "QLHH : A Hyper-heuristic with QLearning for the Flowshop Permutation Problem",
    abstract:
      "Hard combinatorial optimization are problems that involves huge search space and have been studied extensively by operational research. This paper propose a hyper-heuristic based on reinforcment learning to decide the next heuristic to optimize for the Flowshop Permutation Problem.",
    keywords: "FSP, hyper-heuristic, optimization",
    authors:
      "Akli YALAOUI, Mohamed Islem KARABERNOU, Adel BOULAOUAD, Sarah ABCHICHE, Mustapha Ayoub BELOUADAH, ,Mohamed DJILANI.",
    link: "./qlllh.pdf",
    download:
      "A-Hyper-heuristic-with-QLearning-for-the-Flowshop-Permutation-Problem.pdf",
  },
];

const Papers = () => {
  return (
    <div id="papers" className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-5xl m-auto">
        <Title>Papers</Title>
        <IoMdPaper size="5rem" color="rgb(185, 28, 28)"/>
        <section className="space-y-6 mt-6">
          {papers.map((paper) => (
            <article
              key={paper.title}
              className="mx-auto p-4 bg-slate-300 rounded shadow-sm"
            >
              <h3 className="text-center font-semibold text-base sm:text-2xl">
                {paper.title}
              </h3>
              <h6 className="font-bold my-2">Abstract</h6>
              <p className="text-justify">{paper.abstract}</p>
              <h6 className="font-bold my-2">Keywords</h6>
              <p className="text-justify">{paper.keywords}</p>
              <h6 className="font-bold my-2">Authors</h6>
              <p className="text-justify">{paper.authors}</p>
              <div className="mt-4 text-center">
                <a
                  className=" px-2 py-1 font-semibold rounded bg-red-700 text-white"
                  href={paper.link}
                  download={paper.download}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download full paper
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Papers;
