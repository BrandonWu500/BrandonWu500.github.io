const about = () => {
  return (
    <section id="about" className="px-10 dark:bg-slate-900 dark:text-gray-300">
      <div className="container mx-auto pt-40 pb-40 h-full flex flex-col gap-4 max-w-xl leading-8 font-arial">
        <h2 className="text-center uppercase font-bold text-xl font-nunito">
          About Me
        </h2>
        <p>
          <span>Link to my GitHub: </span>
          <a href="https://github.com/BrandonWu500" target="_blank">
            https://github.com/BrandonWu500
          </a>
        </p>
        <p>
          {`Right now, I am actively looking for jobs as a Frontend or UI/UX Developer. I can work 100% remote or relocate, anywhere in the US, to the on-site location.`}
        </p>
        <h3>{`Technologies/Tools/Methods that I have experience with:`}</h3>
        <div>
          <h4>Design:</h4>
          <p>
            Figma, CSS, Sass, Tailwind CSS, styled-components, Responsive Design
          </p>
        </div>
        <div>
          <h4>Code:</h4>
          <p>{`React, Next.js, React Native, MERN Stack, Redux Toolkit, JavaScript, TypeScript, REST APIs`}</p>
        </div>
        <div>
          <h4>Testing:</h4>
          <p>{`React Testing Library, Jest, Mock Service Worker, TDD (Test-Driven Development)`}</p>
        </div>
        <div>
          <h4>SDLC:</h4>
          <p>Agile, Scrum, Kanban, Jira, Confluence, Git, GitHub</p>
        </div>
        <div>
          <h3>Past Projects:</h3>
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
      </div>
    </section>
  );
};
export default about;
