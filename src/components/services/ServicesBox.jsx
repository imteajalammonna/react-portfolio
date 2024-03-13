

const ServicesBox = ({box}) => {
  return (
    <div key={box.title} className="services-box flex flex-col space-y-6 items-center justify-center bg-gray-200 dark:border-slate-500 text-gray-700 dark:bg-slate-800 dark:text-slate-200 border-2">
              <p className="text-8xl">{box.icon}</p>
              <h3 className="text-4xl font-bold">{box.title}</h3>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                aut tempora cupiditate sit id voluptas! Minus maxime eaque placeat
                mollitia?
              </p>
              {/* <a href="#" className="btn">Read More</a> */}
              <button className="buttons" role="buttons"><span className="text">Read More</span></button>
            </div>
  );
};

export default ServicesBox;
