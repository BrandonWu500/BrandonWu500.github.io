const about = () => {
  return (
    <section id="about" className="px-10 dark:bg-slate-900 dark:text-gray-300">
      <div className="container mx-auto pt-40 pb-40 h-full flex flex-col gap-4 max-w-xl leading-8 font-arial">
        <h2 className="text-center uppercase font-bold text-xl font-nunito">
          About Me
        </h2>
        <p>{`Hi, I'm Brandon!`}</p>
        <p>
          {`Right now, I am actively looking for a job as a Frontend or UI/UX Developer with a focus on React/Next.js/React Native along with CSS/styling and design. I can work 100% remote or relocate, anywhere in the US, to the on-site location.`}
        </p>
        <p>
          {`My ideal job would be going from user stories to design (using Figma) to coding frontends/prototypes for websites and/or mobile apps. I also have some experience with full stack development using the MERN Stack.`}
        </p>
        <div>
          <p>Some of my past projects include:</p>
          <ul className="list-disc pl-5">
            <li>Tesla Clone Design with Figma</li>
            <li>Gym Website Design with Figma</li>
            <li>{`Full Stack (MERN) Shopping/E-Commerce Website`}</li>
            <li>{`Full Stack (Next.js with MongoDB) Food Delivery Website`}</li>
            <li>{`Full Stack (MERN) Motorcycle E-Commerce Mobile App with React Native (using Expo)`}</li>
            <li>Frontend of Car Auction Website with React and Three.js</li>
            <li>Frontend of Netflix Clone with Next.js</li>
          </ul>
        </div>
        <p>Here is a little bit more about my background:</p>
        <p>
          {`I recently graduated from the University of Michigan with a Bachelor
          of Science Degree in Computer Science. I have been interested in web
          development for over a year now, specifically the frontend. I have
          been learning through a combination of college courses (mainly geared
          towards web development and UI/UX) and self-learning by reading guides
          and documentation, along with watching YouTube tutorials.`}
        </p>
        <p>
          {`I have experience with modern React.js (using hooks) and many of its associated libraries including React Router / React Navigation and Redux Toolkit. I also have worked with Next.js and TypeScript. Additionally, I have experience with REST APIs, and using axios or RTK Queries to interact with them. I also have experience with user authentication and authorization using JWT (JSON Web Token).`}
        </p>
        <p>
          For styling, I have experience with CSS, Sass, React Native Styles,
          styled-components, Material UI, Tailwind CSS, and Responsive Web
          Design.
        </p>
        <p>
          {`Currently, I am learning and gaining more experience with React Native (using Expo) and Figma.`}
        </p>
        <p>
          <span>Link to my GitHub: </span>
          <a href="https://github.com/BrandonWu500" target="_blank">
            https://github.com/BrandonWu500
          </a>
        </p>
      </div>
    </section>
  );
};
export default about;
