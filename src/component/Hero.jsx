import image from "../../public/casual-life-3d-man-working-on-laptop-and-drinking-coffee.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-[#000300] text-white h-screen">
      <div className="container mx-auto px-4 pt-28 max-w-screen-xl flex items-center justify-between h-screen">
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
          className="lg:w-1/2 m-4"
        >
          <h1 className="text-[4.5rem] font-extrabold">Hai, I am Anas</h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            className="text-[2.1rem]"
          >
            MERN Stack <span className="text-[#00df9a]">Developer</span>
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            className="w-[65%] text-sm text-[#ffffff81]"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the {`industry's`} standard dummy
            text ever since the 1500s.
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="flex gap-10 mt-6 cursor-pointer"
          >
            <FaGithub size={30} className="hover:text-[#00df9a]" />
            <FaLinkedin size={30} className="hover:text-[#00df9a]" />
            <SiLeetcode size={30} className="hover:text-[#00df9a]" />
            <FaInstagram size={30} className="hover:text-[#00df9a]" />
          </motion.div>
        </motion.div>
        <div className="w-1/2 lg:flex items-center justify-center hidden ">
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
                delay: 0.9,
              },
            }}
            className="p-4"
          >
            <img
              src={image}
              className="object-cover w-[90%] h-[90%] lg:w-full lg:h-full"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
