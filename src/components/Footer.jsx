import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="p-8 bg-slate-900 text-white">
      <nav className="max-w-4xl m-auto flex justify-between">
        <div className="flex flex-col space-y-2">
          <a href="mailto:adel.boulaouad.1@ulaval.ca">
            adel.boulaouad.1@ulaval.ca
          </a>
          <a href="tel:514-348-6505">514-348-6505</a>
          <address>Laval, Canada</address>
        </div>
        <div className="flex space-x-3">
          <a
            href="https://github.com/rasta-nitzsche"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size="2rem" color="#f5f5f5" />
          </a>
          <a
            href="https://www.linkedin.com/in/adel-boulaouad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size="2rem" color="#4078c0" />
          </a>
        </div>
      </nav>
      <div className="text-center border-t border-gray-600 p-2 mt-2">
        CopyRights <span className="text-red-700 font-bold">@</span> {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
