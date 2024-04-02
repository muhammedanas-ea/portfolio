// import { FaBootstrap, FaCss3 } from "react-icons/fa";
// import { TiHtml5 } from "react-icons/ti";
// import { SiTailwindcss } from "react-icons/si";
// import { SiExpress, SiMongodb } from "react-icons/si";
import image from "../../public/Screenshot (56).png";
import image2 from "../../public/Screenshot (55).png";
import { motion } from "framer-motion";
const Works = () => {
  const FirstProject = [
    {
      id: 1,
      name: "react",
      deley: 1.4,
    },
    {
      id: 2,
      name: "Express",
      delay: 1.5,
    },
    {
      id: 3,
      name: "MongoDB",
      delay: 1.6,
    },
    {
      id: 4,
      name: "Tailwind css",
      delay: 1.7,
    },
    {
      id: 5,
      name: "Node.js",
      delay: 1.8,
    },
  ];
  const SecondProject = [
    {
      id: 1,
      name: "CSS",
      deley: 1.9,
    },
    {
      id: 2,
      name: "HTML",
      delay: 2,
    },
    {
      id: 3,
      name: "Ajax",
      delay: 2.1,
    },
    {
      id: 4,
      name: "Bootstrap",
      delay: 2.2,
    },
    {
      id: 5,
      name: "Node.js",
      delay: 2.3,
    },
    {
      id: 5,
      name: "Express",
      delay: 2.4,
    },
    {
      id: 5,
      name: "MongoDB",
      delay: 2.5,
    },
  ];
  return (
    <div className="bg-[#000300]">
      <div className="text-white py-[100px] container mx-auto max-w-screen-xl  px-6 ">
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
                delay: 0.8,
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
                <div>
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
                        delay: 1.1,
                      },
                    }}
                    className="text-3xl font-bold"
                  >
                    Resort Booking App
                  </motion.h1>
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
                      delay: 2.1,
                    },
                  }}
                  className="text-[#ffffff81] mt-5"
                >
                  {`I'm `}a self-taught MERN stack developer driven by curiosity
                  and a love for crafting innovative web applications. My
                  journey as a developer has been driven by an insatiable
                  curiosity and a strong desire to create meaningful and
                  innovative web applications.
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
                  delay: 2.1,
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
        <div className="flex-col md:flex-row md:flex items-center mt-12 gap-16 pt-10">
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
                  delay: 1.5,
                },
              }}
              className="md:w-[90%] w-full mb-8 md:mb-0 flex items-center h-[18rem] rounded-lg border-2"
            >
              <img
                src={image2}
                className="object-cover w-full h-full rounded-lg"
                alt=""
              />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full">
              <div className="mt-2">
                <div>
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
                      delay: 1.6,
                    },
                  }}
                  className="text-3xl font-bold">Ecommerce Website</motion.h1>
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
                    delay: 2.8,
                  },
                }}
                className="text-[#ffffff81] mt-5">
                  {`I'm `}a self-taught MERN stack developer driven by curiosity
                  and a love for crafting innovative web applications. My
                  journey as a developer has been driven by an insatiable
                  curiosity and a strong desire to create meaningful and
                  innovative web applications.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
