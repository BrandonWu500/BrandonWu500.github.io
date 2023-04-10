import ProjectWrapper from "@/components/ProjectWrapper";
import Link from "next/link";

const adminDashFront = () => {
  return (
    <ProjectWrapper>
      <section
        className="mx-auto flex flex-col gap-4 leading-8"
        id="admin-dash-front"
      >
        <h3 className="font-bold text-lg">Admin Dashboard Frontend</h3>
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-md">Github Repo Link:</h4>
          <a
            href="https://github.com/BrandonWu500/admin-dashboard/tree/frontend-only"
            target="_blank"
          >
            https://github.com/BrandonWu500/admin-dashboard/tree/frontend-only
          </a>
        </div>

        <p className="font-semibold mt-5">Walkthrough Video:</p>
        <iframe
          height="315"
          src="https://www.youtube.com/embed/V3-VX_pTC_Q"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full"
        ></iframe>

        {/*  <!-- admin dashboard frontend case study --> */}
        <div className="flex flex-col gap-4 font-arial">
          <h4 className="font-semibold text-lg mt-8">Case Study:</h4>
          <p>
            This project is a mock frontend for an admin dashboard. It uses
            React with TypeScript along with Sass.
          </p>
          <p>
            I decided to build this project as a continuation of the e-commerce
            app that I built previously. The goal was to make it easier for an
            admin to access user and product data and make changes accordingly.
            I also wanted to gain more experience with TypeScript and Sass, so I
            thought this would be a good opportunity for that.
          </p>
          <div>
            <h5 className="font-bold">TypeScript:</h5>
            <p>
              Before going into the project, I knew that TypeScript was similar
              to JavaScript, it just meant adding explicit types to variables to
              make it easier to read and understand the code. However, I didn't
              anticipate some of the challenges I would face when writing my
              normal React code.
            </p>
          </div>
          <p>
            It turns out TypeScript didn't agree with some of the ways I had
            initially gone about writing the code. I had to re-think and
            re-write different portions of my code throughout the process to
            avoid running into TypeScript errors.
          </p>
          <p>
            One example of this was when implementing the dark mode feature and
            using the react context api along with the useReducer hook. I wanted
            to pass the dark mode state along with the dispatch function to the
            sidebar and topbar where users would have the option of choosing a
            color theme or just directly toggling dark mode on and off as seen
            in the ui here:
          </p>
          <img
            src="/static/screenshots/admin-front/dark-mode-ui-buttons.png"
            alt=""
            className="mb-8"
          />
          <p>I was going to accomplish this by writing the code like this:</p>
          <img
            src="/static/screenshots/admin-front/dark-mode-context-before.png"
            alt=""
            className="mb-8"
          />
          <p>
            However, I ran into some typescript errors so I ended up creating a
            custom hook and passing that to the context provider value instead.
          </p>
          <img
            src="/static/screenshots/admin-front/dark-mode-context-after-1.png"
            alt=""
          />
          <img
            src="/static/screenshots/admin-front/dark-mode-context-after-2.png"
            alt=""
            className="mb-8"
          />

          <p>
            Another problem I ran into was figuring out the right type names for
            some of the variables I used. I knew I could use the “any” type to
            skirt around some of the errors, but it wasn't the best practice to
            do that because then it would defeat the purpose of using
            TypeScript, so I tried to keep my “any” usage to a minimum and also
            use the vscode intellisense to help me determine what type to use in
            what situation.
          </p>
          <div>
            <h5 className="font-bold">Sass (SCSS syntax):</h5>
            <p>
              This was my first time using Sass in a larger project, but I
              didn't think it would be too difficult to pick up because I was
              confident in my CSS skills and using custom properties.
              Additionally, I had experience with styled-components, which also
              used nested rulesets.
            </p>
          </div>
          <p>
            For the most part, I didn't have any problems with Sass during the
            project. However, one misconception I did have was that the
            stylesheets would work like styled-components. I thought they would
            be specific to the page or component I was working on.
          </p>
          <p>
            For instance, with styled-components I could reuse “class” names
            like “container” and “title” without it affecting other components
            with the same name on other pages.
          </p>
          <img
            src="/static/screenshots/admin-front/styled-components-comparison.png"
            alt=""
            className="mb-8 max-h-64 object-cover object-top"
          />
          <p>
            However, with Sass, I quickly realized that wasn't the case, so I
            decided to wrap the component or page I was working on in a div with
            a unique className name corresponding to the file name. This way I
            could nest all the rulesets within that unique wrapper div and not
            have to worry about reusing names affecting other components.
          </p>
          <img
            src="/static/screenshots/admin-front/sass-comparison.png"
            alt=""
            className="mb-8"
          />
          <p>
            Another unique thing I learned about Sass that I actually quite
            enjoyed using was mix-ins. Mix-ins are similar to functions in Sass
            except they don't have a return value and instead allow you to
            change rulesets accordingly. This was useful when setting an
            element's background color in relation to its color, as well as
            implementing a responsive design for multiple different devices
            (mobile, tablet, laptop).
          </p>
          <img src="/static/screenshots/admin-front/mixin-1.png" alt="" />
          <img
            src="/static/screenshots/admin-front/mixin-2.png"
            alt=""
            className="mb-8 max-h-96 object-contain"
          />
          <p>
            Finally, I also experimented with using loops in Sass, which ended
            up allowing me to reproduce className names similar to Tailwind CSS,
            with regard to customizing specific property values like gap.
          </p>
          <img
            src="/static/screenshots/admin-front/sass-loops.png"
            alt=""
            className="mb-8"
          />
          <div>
            <h5 className="font-bold">Things I'm Proud of:</h5>
            <p>
              The last thing I want to share is just a few code snippets from
              the project that I'm proud of.
            </p>
          </div>
          <p>
            The first was creating my own data table component similar to the
            one used by Material UI. I used an html table and then used enum
            values to sort the different columns when the headers were clicked,
            along with adding an arrow hover effect so a user could clearly tell
            what clicking on the headers would do.
          </p>
          <img src="/static/screenshots/admin-front/data-table-ui.png" alt="" />
          <img
            src="/static/screenshots/admin-front/data-table-code.png"
            alt=""
            className="mb-8"
          />
          <p>
            The second was figuring out how to use a single React ref object to
            store multiple inputs or textareas fields and then use those refs to
            edit and save user info accordingly.
          </p>
          <img
            src="/static/screenshots/admin-front/user-card-ui.png"
            alt=""
            className="mb-8 max-h-96 object-contain"
          />
          <img src="/static/screenshots/admin-front/user-card.png" alt="" />
          <img
            src="/static/screenshots/admin-front/user-card-row.png"
            alt=""
            className="mb-8"
          />
          <p>
            At a first glance it doesn't seem like much code or that difficult,
            but the reason why I got stuck on this part was because I kept
            running into TypeScript errors or the refs wouldn't update their
            respective input field. However, after reading some stack overflow
            posts and a little trial and error, I managed to get it to work.
          </p>
          <p>
            Using those refs, I also was able to create two different ways to
            edit user info. One way was directly in the user info card, and one
            was with a fullscreen popup and overlay.
          </p>
          <img src="/static/screenshots/admin-front/alt-edit-ui.png" alt="" />
          <img
            src="/static/screenshots/admin-front/alternative-edit.png"
            alt=""
            className="mb-8"
          />
          <p>
            Overall, this was a fun project to learn TypeScript and Sass, while
            also giving me the chance to utilize a wider variety of React hooks.
            It was also nice to be able to build off one of my previous project
            ideas. At the same time, the layout I built could still be used for
            a non-ecommerce admin dashboard.
          </p>
          <p>
            In the next installment of the project, my initial plan was to use
            the backend from the MERN shopping site and connect it with the
            frontend of the admin dashboard to allow me to work with dynamic
            data instead of dummy data. However, I have now decided to use
            Google Firebase instead because it will give me a chance to be
            exposed to a new backend technology. Additionally, Firebase seems to
            have less setup and maintenance involved compared to a MERN stack
            app at the cost of less freedom and customizability. However, since
            I want to focus on frontend web development, that's okay for my
            purposes.
          </p>
        </div>
      </section>
      <Link href="/projects/adminDashFirebase">
        <button className="capitalize bg-slate-800 text-white p-5 mt-10 block mx-auto rounded hover:bg-slate-700">
          Learn about how I turned this into a full stack app
        </button>
      </Link>
    </ProjectWrapper>
  );
};
export default adminDashFront;
