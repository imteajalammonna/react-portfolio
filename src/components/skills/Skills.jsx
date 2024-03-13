import SkillsLevel from "./SkillsLevel";
import htmlImg from "../../assets/html.png"
import cssImg from "../../assets/download (6).png"
import jsImg from "../../assets/download (7).png"
import nodejsImg from "../../assets/Node.js-White.png"
import tailwindImg from "../../assets/Tailwind-white.png"
import reactImg from "../../assets/react-icon-256x256-2yyldh38.png"

const Skills = () => {
  return (
    <section id="about" className="bg-[#F3F3F3] dark:bg-gray-900 dark:text-white min-h-screen py-36">
      <h1 className="text-center text-6xl font-bold">MY <span className="text-[#f6005a]"> SKILLS</span></h1>
      <div 
      className="container flex flex-col md:flex-row items-center w-full justify-between py-20 gap-10">
        <div className="">
          <div className="text-slate-500 sm:order-1 w-full">
            <SkillsLevel skillsName="HTML, CSS" percentage={90} />
            <SkillsLevel skillsName="React" percentage={80} />
            <SkillsLevel skillsName="Tailwind" percentage={85} />
            <SkillsLevel skillsName="Node.js" percentage={45} />
            <SkillsLevel skillsName="Figma" percentage={50} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex items-center justify-center flex-col">
            <img className="w-44 h-44 rounded-3xl hover:scale-110 duration-500" src={htmlImg} alt="" />
            <h3 className="text-center text-3xl mt-3 font-bold">HTML</h3>
          </div>
          <div className="flex items-center justify-center flex-col">
            <img className="w-44 h-44 rounded-3xl hover:scale-110 duration-500" src={cssImg} alt="" />
            <h3 className="text-center text-3xl mt-3 font-bold">CSS</h3>
          </div>
          <div className="flex items-center justify-center flex-col">
            <img className="w-44 h-44 rounded-3xl hover:scale-110 duration-500" src={jsImg} alt="" />
            <h3 className="text-center text-3xl mt-3 font-bold">JS</h3>
          </div>
          <div className="flex items-center justify-center flex-col">
            <img className="w-44 h-44 rounded-3xl hover:scale-110 duration-500" src={nodejsImg} alt="" />
            <h3 className="text-center text-3xl mt-3 font-bold">NODE.JS</h3>
          </div>
          <div className="flex items-center justify-center flex-col">
            <img className="w-44 h-44 rounded-3xl hover:scale-110 duration-500" src={reactImg} alt="" />
            <h3 className="text-center text-3xl mt-3 font-bold">REACT.JS</h3>
          </div>
          <div className="flex items-center justify-center flex-col">
            <img className="w-44 h-44 rounded-3xl hover:scale-110 duration-500" src={tailwindImg} alt="" />
            <h3 className="text-center text-3xl mt-3 font-bold">TAILWIND CSS</h3>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;
