import { faCss3, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div className="p-6 mx-auto">
        <h2 className="text-5xl font-bold text-violet-800 text-center mb-6">
          About Us
        </h2>
        <p className="text-center mb-6 text-2xl text-gray-500">
          Welcome to BranchHub, where simplicity meets functionality.
        </p>
        <p className="text-center mb-6 text-xl text-violet-800">
          Built using :
        </p>
        <div className="flex items-center justify-center gap-4 mb-4 w-full p-4  min-h-full">
          <div className="p-6 bg-white border-2 border-violet-800 w-80 rounded-lg shadow h-80 ">
            <FontAwesomeIcon
              icon={faReact}
              className={"text-3xl text-violet-800 p-4 mt-4"}
            />
            <p className="text-gray-500 text-center text-2xl">React.js</p>
          </div>
          <div className="p-6 bg-white border-2 border-violet-800 w-80 rounded-lg shadow h-80 ">
            <FontAwesomeIcon
              icon={faCss3}
              className="text-3xl text-violet-800 p-4 mt-4"
            />
            <p className="text-gray-500 text-center text-2xl">Tailwind CSS</p>
          </div>
          <div className="p-6 bg-white border-2 border-violet-800 w-80 rounded-lg shadow h-80 ">
            <FontAwesomeIcon
              icon={faDatabase}
              className="text-3xl text-violet-800 p-4"
            />
            <p className="text-gray-500 text-center text-2xl">MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
