import { SiExpress, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";

const Skills = () => {
  const skillsData = [
    {
      color: "#e34c26",
      width: "80%",
      skill: "Mongodb",
      icon: <SiMongodb size={70} color="#3fa037" />,
      delay: 0.5,
    },
    {
      color: "#e34c26",
      width: "80%",
      skill: "Express",
      icon: <SiExpress size={70} color="#68a063" />,
      delay: 0.6,
    },
    {
      color: "#e34c26",
      width: "80%",
      skill: "React",
      icon: <FaReact size={70} color="#61dbfb" />,
      delay: 0.7,
    },
    {
      color: "#e34c26",
      width: "80%",
      skill: "Node.js",
      icon: <FaNodeJs size={70} color="#68a063" />,
      delay: 0.8,
    },
  ];

  return (
    <div className="bg-[#000300]">
      <div className="text-white container py-[50px] md:py-[100px] mx-auto max-w-screen-xl  px-6 ">
        <div className="flex-col md:flex-row w-full items-center md:flex gap-16">
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {skillsData.map((item, index) => {
                return (
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
                        delay: item.delay,
                      },
                    }}
                    key={index}
                    className=" h-40 shadow-xl bg-[#1a1919c0] hover:bg-black rounded-md flex gap-4  flex-col justify-center items-center border-2"
                  >
                    {item.icon}
                    <h1 className="">{item.skill}</h1>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full mt-14 md:mt-0">
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
                    delay: 0.9,
                  },
                }}
                className="text-[#fff] text-2xl font-bold"
              >
                MY SKILLS
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
                    delay: 1,
                  },
                }}
                className="text-[#fff] text-5xl mt-2 font-bold"
              >
                What <span className="text-[#00df9a]">I can do</span>
              </motion.h1>
              <div className="mt-7 text-[#ffffff81]">
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
                      delay: 1.1,
                    },
                  }}
                >
                  Self-taught MERN stack developer driven by curiosity and
                  commitment to creating innovative web applications. The
                  journey as a developer has been driven by insatiable and a
                  strong desire to create meaningful and innovative web
                  applications. Self-learning skills allow for quick absorption
                  and application of new technologies, making adaptability to
                  the ever-evolving tech industry possible.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
