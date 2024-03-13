import img from "../../assets/Monna.jpg"

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white min-h-screen py-20">
      <h1 className="text-center text-4xl xl:text-6xl font-bold text-black dark:text-white">
        ABOUT ME
      </h1>
      <div className="container">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2 my-20 space-x-16">
          <div className="font-bold relative">
            <img className=" rounded-2xl" src={img} alt="" />
          </div>
          <div className="text-slate-500">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deleniti, architecto ullam reprehenderit dolorem magnam quae
              adipisci velit
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deleniti, architecto ullam reprehenderit dolorem magnam quae
              adipisci velit
            </p>
            <div className="mt-10">
              <a className="button pr-5" role="button"><span className="text">Resume</span></a>
              <a
                href="tel:+8801300656028"
                title="Call +8801300656028 "
                role="buttons"
                className="buttons ml-5"
              >
               <span className="text">Contact</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
