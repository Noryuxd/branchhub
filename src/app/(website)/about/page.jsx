import {
  faCheckCircle,
  faDollarSign,
  faUsers,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div className="p-6 mx-auto">
        <h2 className="text-5xl font-bold text-violet-800 text-center mb-6">
          About Us
        </h2>
        <p className="text-center mb-12 text-xl text-gray-500">
          Welcome to BranchHub – where simplicity meets functionality. Say
          goodbye to cluttered links and hello to streamlined sharing. <br />
          Crafted with React.js, Tailwind CSS, and MongoDB, BranchHub
          revolutionizes link management, enabling effortless sharing of
          multiple links with just one URL.
        </p>
        <div className="flex items-center justify-center gap-16 mb-8 mt-8 w-full p-4">
          <div className=" items-center  w-48 h-64 justify-center bg-white border-2 border-violet-800 rounded-lg shadow p-6">
            <FontAwesomeIcon
              icon={faUsers}
              width={32}
              height={32}
              className="text-2xl w-32 h-32 text-violet-800 mb-2"
              fixedWidth
            />
            <p className="text-gray-500 font-bold text-center text-xl">
              More than 200 Users
            </p>
          </div>
          <div className=" items-center  w-48 h-64 justify-center bg-white border-2 border-violet-800 rounded-lg shadow p-6">
            <FontAwesomeIcon
              width={32}
              height={32}
              icon={faDollarSign}
              className="text-2xl w-32 h-32 text-violet-800 mb-2"
              fixedWidth
            />
            <p className="text-gray-500 font-bold text-center text-xl">
              3 Available Plans
            </p>
          </div>
          <div className="items-center w-48 h-64 justify-center bg-white border-2 border-violet-800 rounded-lg shadow p-6">
            <FontAwesomeIcon
              width={32}
              height={32}
              icon={faCheckCircle}
              className="text-2xl w-32 h-32 text-violet-800 mb-2"
              fixedWidth
            />
            <p className="text-gray-500 font-bold text-center text-xl">
              98% Satisfied Clients
            </p>
          </div>
          <div className="items-center justify-center w-48 h-64 bg-white border-2 border-violet-800 rounded-lg shadow p-6">
            <FontAwesomeIcon
              icon={faChartLine}
              width={32}
              height={32}
              className="text-2xl w-32 h-32 text-violet-800 mb-2"
              fixedWidth
            />
            <p className="text-gray-500 font-bold text-center text-xl">
              Growing User Base
            </p>
          </div>
        </div>

        <div className="bg-gray-100 py-12">
          <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-violet-800 mb-8">
              Our Approach
            </h2>
            <div className="flex flex-col gap-3 justify-center">
              <div className="bg-white border ml-[-40px] border-violet-800 shadow rounded-lg overflow-hidden w-80 md:w-auto mb-4 md:mb-0 md:mr-4">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-violet-800 mb-2">
                    Customer-Centric Design
                  </h3>
                  <p className="text-gray-700">
                    We prioritize the needs and experiences of our users,
                    ensuring that our platform is intuitive and user-friendly.
                  </p>
                </div>
              </div>
              <div className="bg-white mb-3 mr-[-40px] border border-violet-800 shadow rounded-lg overflow-hidden w-80 md:w-auto md:ml-4">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-violet-800 mb-2">
                    Continuous Improvement
                  </h3>
                  <p className="text-gray-700">
                    We are committed to continuously improving our services
                    based on user feedback and emerging technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white mb-3 ml-[-40px] border border-violet-800 shadow rounded-lg overflow-hidden w-80 md:w-auto mx-auto mt-8 md:mt-0">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-violet-800 mb-2">
                  Transparent Communication
                </h3>
                <p className="text-gray-700">
                  We believe in transparent communication with our users,
                  partners, and team members to foster trust and collaboration.
                </p>
              </div>
            </div>
            <div className="bg-white mr-[-40px] border border-violet-800 shadow rounded-lg overflow-hidden w-80 md:w-auto md:ml-4">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-violet-800 mb-2">
                  Innovative Solutions
                </h3>
                <p className="text-gray-700">
                  We strive to deliver innovative solutions that empower users
                  to achieve their goals efficiently and effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
