const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-t from-slate-400 dark:from-slate-800 dark:to-slate-900 dark:text-gray-200 flex flex-col lg:flex-row text-center lg:text-left items-center justify-center gap-10 w-full">
      <img
        src="./static/profile-pics/profile-pic-resized-1.jpg"
        alt="Portrait of Brandon Wu"
        className="h-32 w-32 sm:h-48 sm:w-48 lg:h-96 lg:w-96 object-cover rounded-full"
      />
      <div>
        <p className="text-xl md:text-3xl xl:text-5xl font-medium">Hi! I'm</p>
        <h1 className="my-2 text-4xl md:text-6xl xl:text-7xl font-bold">
          Brandon Wu
        </h1>
        <p
          id="text"
          className="text-2xl md:text-4xl xl:text-6xl font-semibold capitalize"
        >
          Front-end web developer
        </p>
      </div>
    </section>
  );
};
export default Hero;
