// import { FaBootstrap, FaCss3 } from "react-icons/fa";
// import { TiHtml5 } from "react-icons/ti";
// import { SiTailwindcss } from "react-icons/si";
// import { SiExpress, SiMongodb } from "react-icons/si";
import image from "../../public/Screenshot (56).png";
import image2 from "../../public/Screenshot (55).png";

const Works = () => {
  return (
    <div className="bg-[#000300]">
      <div className="text-white py-[100px] container mx-auto max-w-screen-xl  px-6 ">
        <div>
          <h5 className="text-[#fff] text-2xl font-bold">MY WORKS</h5>
          <h1 className="text-[#fff] text-5xl mt-2 font-bold">
            What <span className="text-[#00df9a]">I have built</span>
          </h1>
        </div>
        <div className="flex-col md:flex-row md:flex items-center gap-16 pt-10">
          <div className="w-full md:w-1/2">
            <div className="w-full">
              <div className="mt-2">
                <div>
                  <h1 className="text-3xl font-bold">Resort Booking App</h1>
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    React js
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Express
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    MongoDB
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Tailwind css
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Node.js
                  </button>
                </div>
                <p className="text-[#ffffff81] mt-5">
                  {`I'm `}a self-taught MERN stack developer driven by curiosity
                  and a love for crafting innovative web applications. My
                  journey as a developer has been driven by an insatiable
                  curiosity and a strong desire to create meaningful and
                  innovative web applications.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center m">
            <div className="md:w-[90%] w-full h-[18rem] mt-8 md:mt-0 rounded-lg border-2">
              <img src={image} className="object-cover w-full h-full rounded-lg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex-col md:flex-row md:flex items-center mt-12 gap-16 pt-10">
          <div className="w-full md:w-1/2">
            <div className="md:w-[90%] w-full mb-8 md:mb-0 flex items-center h-[18rem] rounded-lg border-2">
              <img src={image2} className="object-cover w-full h-full rounded-lg" alt="" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full">
              <div className="mt-2">
                <div>
                  <h1 className="text-3xl font-bold">Ecommerce Website</h1>
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Ejs
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Express
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    MongoDB
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Bootstrap
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Node.js
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Ajax
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    HTML
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    CSS
                  </button>
                </div>
                <p className="text-[#ffffff81] mt-5">
                  {`I'm `}a self-taught MERN stack developer driven by curiosity
                  and a love for crafting innovative web applications. My
                  journey as a developer has been driven by an insatiable
                  curiosity and a strong desire to create meaningful and
                  innovative web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
