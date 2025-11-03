import React from "react";
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <div className="bg-zinc-800 text-white px-8 py-6 flex flex-col md:flex-row justify-between items-center">
      <p className="text-lg font-thin text-center text-red-400 mb-3 md:mb-0">
        Contact us on :-
      </p>

      <div className="flex gap-4">
        <a
          href="https://www.instagram.com/harsh_royy/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-red-400 hover:text-white transition"
        >
          <FiInstagram size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/harshraj86/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-red-400 hover:text-white transition"
        >
          <FiLinkedin size={20} />
        </a>

        <a
          href="https://github.com/harshroyy/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-red-400 hover:text-white transition"
        >
          <FiGithub size={20} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
