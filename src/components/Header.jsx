import React from "react";

const Header = () => {
  return (
    <div
      className="shadow-md fixed top-0 left-0 w-full z-50"
      style={{ backgroundColor: "#ecf0f1" }}
    >
      <nav className="flex justify-between items-center max-w-5xl m-auto p-4">
        <h2 className="text-2xl font-medium text-slate-800">Adel Boulaouad</h2>
        <ul className="flex justify-between items-center space-x-4">
          <li>
            <a
              className=" px-2 py-1 font-semibold rounded bg-red-700 text-white"
              href="./Cv-Adel.pdf"
              download="Cv-Adel.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="#about" className="text-slate-800">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-slate-800">
              Skills
            </a>
          </li>
          <li>
            <a href="#papers" className="text-slate-800">
              Papers
            </a>
          </li>
          <li>
            <a href="#projects" className="text-slate-800">
              Projects
            </a>
          </li>
          <li>
            <a href="#certifications" className="text-slate-800">
              Certifications
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
