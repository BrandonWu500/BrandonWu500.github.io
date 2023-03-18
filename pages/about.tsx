const about = () => {
  return (
    <section id="about" className="px-10 dark:bg-slate-900 dark:text-gray-300 ">
      <div className="container mx-auto pt-40 pb-40 h-full flex flex-col gap-4 max-w-xl leading-8 font-arial">
        <h2 className="text-center uppercase font-bold text-xl font-nunito">
          About Me
        </h2>
        <p>
          {`I recently graduated from the University of Michigan with a Bachelor
          of Science Degree in Computer Science. I have been interested in web
          development for over a year now, specifically the frontend. I have
          been learning through a combination of college courses (mainly geared
          towards web development and UI/UX) and self-learning by reading guides
          and documentation, along with watching YouTube tutorials.`}
        </p>
        <p>
          Right now, I am actively looking for a job as a Frontend Web/UI
          Developer with a focus on React and CSS. I can work 100% remote or
          relocate, anywhere in the US, to the on-site location.
        </p>
        <p>Here is a little bit more about me:</p>
        <p>
          I am comfortable with HTML, CSS, and JavaScript. I also have
          experience with React.js and many of its associated libraries
          including React Redux, React Router, and Redux Toolkit. Recently, I
          have been having fun building projects with Next.js, TypeScript, and
          Sass, so I have experience with those as well.
        </p>
        <p>
          Finally, I also have experience with styled-components, Material UI,
          Tailwind CSS, and Responsive Web Design.
        </p>
        <p>
          {`Currently, I am trying to gain more experience with the MERN Stack and
          MongoDB with Next.js (using the Mongoose library) by building on my
          previous frontend projects.`}
        </p>
        <p>
          <span>Link to my Github: </span>
          <a href="https://github.com/BrandonWu500" target="_blank">
            https://github.com/BrandonWu500
          </a>
        </p>
      </div>
    </section>
  );
};
export default about;
