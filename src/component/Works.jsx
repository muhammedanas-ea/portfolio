import image from "../../public/Screenshot (56).png";
import image2 from "../../public/Screenshot (55).png";
import image3 from "../../public/Password-Generator.jpeg"
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const Works = () => {
  const FirstProject = [
    {
      id: 1,
      name: "react",
      deley: 0.8,
    },
    {
      id: 2,
      name: "Express",
      delay: 0.9,
    },
    {
      id: 3,
      name: "MongoDB",
      delay: 1,
    },
    {
      id: 4,
      name: "Tailwind css",
      delay: 1.1,
    },
    {
      id: 5,
      name: "Node.js",
      delay: 1.2,
    },
  ];
  const SecondProject = [
    {
      id: 1,
      name: "CSS",
      deley: 0.7,
    },
    {
      id: 2,
      name: "HTML",
      delay: 0.8,
    },
    {
      id: 3,
      name: "Ajax",
      delay: 0.9,
    },
    {
      id: 4,
      name: "Bootstrap",
      delay: 1,
    },
    {
      id: 5,
      name: "Node.js",
      delay: 1.1,
    },
    {
      id: 6,
      name: "Express",
      delay: 1.2,
    },
    {
      id: 7,
      name: "MongoDB",
      delay: 1.3,
    },
  ];
  return (
    <div className="bg-[#000300]">
      <div className="text-white py-[50px] md:py-[100px] container mx-auto max-w-screen-xl  px-6 ">
        <div>
          <motion.h5
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
            className="text-[#fff] text-2xl font-bold"
          >
            MY WORKS
          </motion.h5>
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.6,
              },
            }}
            className="text-[#fff] text-5xl mt-2 font-bold"
          >
            What <span className="text-[#00df9a]">I have built</span>
          </motion.h1>
        </div>
        <div className="flex-col md:flex-row md:flex items-center gap-16 pt-10">
          <div className="w-full md:w-1/2">
            <div className="w-full">
              <div className="mt-2">
                <div className="flex items-center gap-6">
                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 1,
                        delay: 0.7,
                      },
                    }}
                    className="text-3xl font-bold"
                  >
                    Resort Booking App
                  </motion.h1>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 1,
                        delay: 0.8,
                      },
                    }}
                    className="flex items-center gap-3"
                  >
                    <a href="https://github.com/muhammedanas-ea/Travello">
                      <FaGithub size={35} className="hover:text-[#00df9a]" />
                    </a>
                    <a href="https://travello-olive.vercel.app/">
                      <FaLink size={35} className="hover:text-[#00df9a]" />
                    </a>
                  </motion.div>
                </div>
                <div className="mt-6">
                  {FirstProject.map((item) => {
                    return (
                      <motion.button
                        initial={{
                          opacity: 0,
                          y: 50,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 1,
                            delay: item.delay,
                          },
                        }}
                        key={item.id}
                        type="button"
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        {item.name}
                      </motion.button>
                    );
                  })}
                </div>
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      delay: 1.3,
                    },
                  }}
                  className="text-[#ffffff81] mt-5"
                >
                  Travello Resort Booking Management is a web application built
                  using React, Node.js, Express, and MongoDB. It features
                  streamlined authentication using Nodemailer and Google login,
                  enhancing security with JWT tokens. The platform allows image
                  uploads using Multer for efficient storage and includes
                  real-time chat functionality using Socket.io. It also
                  integrates a secure payment gateway through Stripe for
                  seamless transactions.
                </motion.p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center m">
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  delay: 1.1,
                },
              }}
              className="md:w-[90%] w-full h-[18rem] mt-8 md:mt-0 rounded-lg border-2"
            >
              <img
                src={image}
                className="object-cover w-full h-full rounded-lg"
                alt=""
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:flex items-center mt-12 gap-16 pt-10">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  delay: 0.5,
                },
              }}
              className="md:w-[90%] w-full mb-8 md:mb-0 flex items-center h-[18rem] rounded-lg border-2"
            >
              <img
                src={image2}
                className="object-fill w-full h-full rounded-lg"
                alt=""
              />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full">
              <div className="mt-2">
                <div className="flex items-center gap-6">
                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 1,
                        delay: 0.6,
                      },
                    }}
                    className="text-3xl font-bold"
                  >
                    Ecommerce Website
                  </motion.h1>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 1,
                        delay: 0.7,
                      },
                    }}
                    className="flex items-center gap-3"
                  >
                    <a href="https://github.com/muhammedanas-ea/ebicycles">
                      <FaGithub size={35} className="hover:text-[#00df9a]" />
                    </a>
                    <a href="https://ebicycles.onrender.com/">
                      <FaLink size={35} className="hover:text-[#00df9a]" />
                    </a>
                  </motion.div>
                </div>
                <div className="mt-6">
                  {SecondProject.map((item) => {
                    return (
                      <motion.button
                        initial={{
                          opacity: 0,
                          y: 50,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 1,
                            delay: item.delay,
                          },
                        }}
                        key={item.id}
                        type="button"
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        {item.name}
                      </motion.button>
                    );
                  })}
                </div>
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      delay: 1.4,
                    },
                  }}
                  className="text-[#ffffff81] mt-5"
                >
                  EBICYCLE is a dynamic e-commerce platform with a user-friendly
                  interface, secure payments, advanced search, filtering, and
                  order tracking for a seamless shopping experience
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col md:flex-row md:flex items-center mt-12 gap-16 pt-10">
          <div className="w-full md:w-1/2">
            <div className="w-full">
              <div className="mt-2">
                <div className="flex items-center gap-6">
                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 1,
                        delay: 0.7,
                      },
                    }}
                    className="text-3xl font-bold"
                  >
                    password generator
                  </motion.h1>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 1,
                        delay: 0.8,
                      },
                    }}
                    className="flex items-center gap-3"
                  >
                    <a href="https://github.com/muhammedanas-ea/Travello">
                      <FaGithub size={35} className="hover:text-[#00df9a]" />
                    </a>
                  </motion.div>
                </div>
                <div className="mt-6">
                  {FirstProject.map((item) => {
                    return (
                      <motion.button
                        initial={{
                          opacity: 0,
                          y: 50,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 1,
                            delay: item.delay,
                          },
                        }}
                        key={item.id}
                        type="button"
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        {item.name}
                      </motion.button>
                    );
                  })}
                </div>
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      delay: 1.3,
                    },
                  }}
                  className="text-[#ffffff81] mt-5"
                >
                  Password Generator Web Application (MERN Stack) This project
                  is a Password Generator web application developed using the
                  MERN stack (MongoDB, Express.js, React, Node.js). The primary
                  goal of this application is to provide users with a tool to
                  generate secure and random passwords tailored to their
                  specific needs and preferences.
                </motion.p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center m">
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  delay: 1.1,
                },
              }}
              className="md:w-[90%] w-full h-[18rem] mt-8 md:mt-0 rounded-lg border-2"
            >
              <img
                src={image3}
                className="object-cover w-full h-full rounded-lg"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
