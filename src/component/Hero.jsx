import image from "../../public/casual-life-3d-man-working-on-laptop-and-drinking-coffee.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Hero = () => {
  const socialMedia = [
    {
      id: 1,
      icon: <FaGithub size={30} className="hover:text-[#00df9a]" />,
      url: "https://github.com/muhammedanas-ea",
      delay: 0.8,
    },
    {
      id: 2,
      icon: <FaLinkedin size={30} className="hover:text-[#00df9a]" />,
      url: "https://www.linkedin.com/in/muhammed-anas-44b218209/",
      delay: 0.9,
    },
    {
      id: 3,
      icon: <SiLeetcode size={30} className="hover:text-[#00df9a]" />,
      url: "https://leetcode.com/muhammedanasea2000/",
      delay: 1,
    },
    {
      id: 4,
      icon: <FaInstagram size={30} className="hover:text-[#00df9a]" />,
      url: "https://www.instagram.com/a.n.a.s.ea?igsh=MXZiMzB5bDE3ZzRhaQ==",
      delay: 1.1,
    },
  ];
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
            Mern stack <span className="text-[#00df9a]">Developer</span>
          </motion.p>
          <div className="flex gap-6 mt-6 cursor-pointer">
            {socialMedia.map((item) => {
              return (
                <motion.a
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
                    delay: item.delay,
                  }}
                  key={item.id}
                  href={item.url}
                >
                  {item.icon}
                </motion.a>
              );
            })}
          </div>
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
