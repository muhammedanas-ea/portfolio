import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <div className="bg-[#000300]">
      <div className="text-white py-[100px] flex items-center justify-center container mx-auto max-w-screen-xl  px-6 ">
        <div className="text-center">
          <h5 className="text-[#fff] text-2xl font-bold">MY CONTACT</h5>
          <h1 className="text-[#fff] text-5xl mt-2 font-bold">
            Contact <span className="text-[#00df9a]">Me Here</span>
          </h1>
          <div className="text-[#ffffff9d] pt-10">
            <h3 className="text-xl">muhammedanasea2000@gmail.com</h3>
          </div>
          <div className="flex justify-center items-center gap-6 mt-6 cursor-pointer">
            <FaGithub size={30} />
            <FaLinkedin size={30} />
            <SiLeetcode size={30} />
            <FaInstagram size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
