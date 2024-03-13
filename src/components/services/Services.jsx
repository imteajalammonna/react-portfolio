// import ServicesBox from "./ServicesBox";
import { BiCodeAlt } from "react-icons/bi";
import { BiDevices } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import ServicesBox from "./ServicesBox";
const Services = () => {
  const boxes = [
    {
      icon: <BiCodeAlt />,
      title: 'Web Development',
      paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum eos adipisci animi atque aperiam tenetur et neque quia ullam voluptas sunt quo laborum quis, nisi molestiae eveniet dolorem ipsum sint?'
    },
    {
      icon: <BiDevices />,
      title: 'Responsive Design',
      paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum eos adipisci animi atque aperiam tenetur et neque quia ullam voluptas sunt quo laborum quis, nisi molestiae eveniet dolorem ipsum sint?'
    },
    {
      icon: <FiActivity />,
      title: 'Tailwind CSS',
      paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum eos adipisci animi atque aperiam tenetur et neque quia ullam voluptas sunt quo laborum quis, nisi molestiae eveniet dolorem ipsum sint?'
    },
  ]
  return (
    <section className="min-h-screen dark:bg-[#1E293B] bg-[#ffffff]" id="services">
      <div className="flex justify-center items-center flex-wrap gap-2 container">
        <h2 className="heading text-6xl font-bold my-20">Our <span className="text-[#f6005a]">Services</span></h2>
        <div className="services-container grid grid-cols-1 md:grid-cols-3  gap-4">
          {
            boxes.map(box => <ServicesBox key={box.title} box={box}></ServicesBox>)
          }
        </div>
      </div>
    </section>
    // <section className="bg-secondary dark:bg-gray-900 dark:text-white py-10">
    //   <div className="container flex flex-col items-center">
    //     <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
    //       Services
    //     </h1>
    //     <p className="text-slate-500 text-center md:w-[50%] mx-auto">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
    //       dolor sit amet. Id,erroradipisicing elit. Id, error.
    //     </p>
    //   </div>
    //   <div>
    //     <ServicesBox />
    //   </div>
    // </section>
  );
};

export default Services;
