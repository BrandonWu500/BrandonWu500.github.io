import Image from "next/image";
import Typewriter from "typewriter-effect";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";

type HeroProps = {
  setBtnScrollDown: any;
};

const Hero = ({ setBtnScrollDown }: HeroProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setBtnScrollDown(false);
      setIsScrolled(window.scrollY === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);
  return (
    <section className="h-screen bg-gradient-to-t from-slate-400 dark:from-slate-800 dark:to-slate-900 dark:text-gray-200 flex flex-col lg:flex-row text-center lg:text-left items-center justify-center gap-10 w-full relative">
      <div className="relative h-32 w-32 sm:h-48 sm:w-48 lg:h-96 lg:w-96 ">
        <Image
          src="/static/profile-pics/profile-pic-resized-1.jpg"
          alt="Portrait of Brandon Wu"
          fill
          className="object-cover rounded-full"
          priority
        />
      </div>
      <div>
        <p className="text-xl md:text-3xl xl:text-5xl font-medium">Hi! I'm</p>
        <h1 className="my-2 text-4xl md:text-6xl xl:text-7xl font-bold">
          Brandon Wu
        </h1>
        <div
          id="text"
          className="text-2xl md:text-4xl xl:text-5xl font-semibold flex flex-col flex-wrap gap-2 mt-5"
        >
          <span className="text-blue-700 dark:text-blue-400">
            <Typewriter
              options={{
                strings: [
                  "Frontend",
                  "React",
                  "React Native",
                  "Next.js",
                  "UI/UX",
                  "MERN Stack",
                ],
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </span>
          <span>Developer</span>
        </div>
      </div>
      {isScrolled ? (
        <button className="absolute bottom-5">
          <div className="text-6xl">
            <KeyboardArrowDownIcon fontSize="inherit" />
          </div>
        </button>
      ) : (
        <button
          className="absolute bottom-5 motion-safe:animate-bounce"
          onClick={() => setBtnScrollDown(true)}
        >
          <div className="text-6xl">
            <KeyboardArrowDownIcon fontSize="inherit" />
          </div>
        </button>
      )}
    </section>
  );
};
export default Hero;
