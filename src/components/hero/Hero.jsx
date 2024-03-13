import { useEffect, useState } from 'react';
import Typed from 'typed.js';
import personImg from "../../assets/Monna-Photoroom.jpg";
import audioFile from "../../../public/btn-autdio.wav";
const Hero = () => {
  const [audio] = useState(new Audio(audioFile));

  const handleMouseDown = () => {
    audio.currentTime = 0; // Reset audio to start
    audio.play(); // Start playing the audio
  };
  useEffect(() => {
    const strings = ['Junior Developer', 'React.js Developer', 'Web Developer'];
    const options = {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    };

    const typed = new Typed('.multiple-text', options);

    return () => {
      typed.destroy(); // Clean up Typed instance on component unmount
    };
  }, []);
  return (
    <>
      <section className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center h-[100vh] sm:py-0 ">
          <div className="">
            <div className="space-y-1 grid justify-items-center sm:justify-items-start">
              <p className="uppercase text-xl md:text-3xl mb-0">It&apos;s</p>
              <p className="text-2xl md:text-6xl font-bold text-black/80 dark:text-white pb-5">
                IMTEAJ ALAM MONNA
              </p>
              <p className="text-2xl md:text-4xl text-gray-700 dark:text-white font-bold pb-5">
              And  I&apos;m a <span className="multiple-text text-[#ff007b]"></span>
              </p>
              <p className="text-black/75 pb-6 dark:text-white/70 text-center sm:text-left font-serif">
              Hi! Thanks For Visiting My Portfolio. I Am A Junior Web Developer. I Work With Honesty And Dedication. Let Your Website Creation Journey Begin With Me. I Will Try My Best To Win You Over.Grow Your Business With Me.
              </p>
              <button  className="glowing-btn pt-10 dark:text-white text-black"
                onClick={handleMouseDown}  >
                <span className="glowing-txt w-span">Down<span className="faulty-letter w-span">load </span> CV
                  <span className="bx bxs-download w-span"></span>
                </span>
              </button>
            </div>
          </div>
          {/* image section */}
          {/* <div
            className={`bg-[url("https://source.unsplash.com/random")] absolute bg-no-repeat bg-center bg-cover `}
          ></div> */}
          <div>
            <img
              src={personImg}
              className="w-8/12 md:w-full py-10 md:p-0 rounded-full md:max-w-lg mx-auto backdrop-blur-sm hover:scale-110 duration-500"
              alt="person"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
