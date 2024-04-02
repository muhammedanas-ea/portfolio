import { SiExpress, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { FaReact,FaNodeJs } from "react-icons/fa";



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
      icon: <SiExpress  size={70} color="#68a063" />,
      delay: 0.8,
    },
    {
      color: "#e34c26",
      width: "80%",
      skill: "React",
      icon: <FaReact size={70} color="#61dbfb" />,
      delay: 1.1,
    },
    {
      color: "#e34c26",
      width: "80%",
      skill: "Node.js",
      icon: <FaNodeJs size={70} color="#68a063" />,
      delay: 1.4,
    },
  ];

  return (
    <div className="bg-[#000300]">
      <div className="text-white container py-[100px] mx-auto max-w-screen-xl  px-6 ">
        <div className="flex-col md:flex-row w-full items-center md:flex gap-16">
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {skillsData.map((item) => {
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
                    key={item.id}
                    className=" h-40 rounded-md flex gap-4  flex-col justify-center items-center border-2"
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
                    delay: 1.5,
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
                    delay: 0.8,
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
                  {`I'm `}a self-taught MERN stack developer driven by curiosity
                  and a love for crafting innovative web applications. My
                  journey as a developer has been driven by an insatiable
                  curiosity and a strong desire to create meaningful and
                  innovative web applications.
                </motion.p>
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
                  className="mt-4"
                >
                  {" "}
                  My self-learning skills allow me to quickly absorb and apply
                  new technologies, making me adaptable to the ever-evolving
                  tech industry. I approach coding as a continuous journey of
                  improvement, always eager to embrace and integrate emerging
                  technologies into my skill set.
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
