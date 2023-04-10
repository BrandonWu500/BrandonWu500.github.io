import ProjectWrapper from "@/components/ProjectWrapper";
import Image from "next/image";

const NetflixCloneFront = () => {
  return (
    <ProjectWrapper>
      <section
        id="netflix-clone-front"
        className="mx-auto flex flex-col gap-4  leading-8"
      >
        <h3 className="font-bold text-lg">
          Netflix Clone Frontend with Next.js
        </h3>
        <Image
          src="/static/screenshots/netflix-clone-front/landing-page.png"
          alt=""
          width={500}
          height={500}
          className="object-contain mb-5"
        />
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-md">Github Repo Link:</h4>
          <a
            href="https://github.com/BrandonWu500/netflix-clone"
            target="_blank"
          >
            https://github.com/BrandonWu500/netflix-clone
          </a>
        </div>

        <p className="font-semibold mt-5">Walkthrough Video:</p>
        <iframe
          height="315"
          src="https://www.youtube.com/embed/Opl0oe4AxpA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full"
        ></iframe>

        <div className="flex flex-col gap-1 mt-5">
          <h4 className="font-bold text-md">{`Try it yourself! (Deployment Link)`}</h4>
          <div className="my-2">
            <p>Disclaimers:</p>
            <ul className="list-decimal pl-5">
              <li>Currently, the design is not responsive</li>
              <li>
                Since it's just a frontend, you can enter any email and password
                to login and view the home page
              </li>
            </ul>
          </div>
          <a
            href="https://brandonwu500-netflix-clone-frontend.vercel.app/"
            target="_blank"
          >
            https://brandonwu500-netflix-clone-frontend.vercel.app/
          </a>
        </div>

        {/* <!-- netflix clone frontend case study --> */}
        <div className="font-arial flex flex-col gap-4">
          <h4 className="font-semibold mt-8 text-lg">Case Study:</h4>
          <div>
            <h5 className="font-bold">Intro:</h5>
            <p>
              In this project I built the frontend for a Netflix clone. I used
              Next.js along with TypeScript and Sass.
            </p>
          </div>
          <p>
            This was my second project with Next.js, so instead of focusing most
            of my time on learning Next, I spent more time on the actual
            implementation of the design. I used the Netflix UI as a guide in
            terms of color scheme, layout, and overall features. Some components
            are not exactly the same as Netflix, but I tried to make everything
            look like it fit the Netflix theme.
          </p>
          <div>
            <h5 className="font-bold">Image Slider/Carousel:</h5>
            <p>
              By far, the hardest and most time-consuming part of the project
              was the image slider.
            </p>
          </div>
          <p>
            At first, I thought it wouldn't be too difficult to implement
            because I had already done a couple in my previous projects.
            However, the big difference with this one was the fact that I was
            displaying multiple slides on the screen at once. Also, instead of
            shifting the slides one by one, I would have to shift to a new set
            of slides each time. I ended up trying two different approaches.
          </p>
          <div>
            <h5 className="font-bold">Translating by 100%:</h5>
            <p>
              The first approach relied on using percentages or relative sizes
              and distances. I used display flex on the slides and then limited
              their size to 25% (using flex-basis and max-width). I then
              justified them to the center. Finally when clicking the arrows, it
              would translate the set of slides by 100% using a slide index.
              This means I could consistently shift the same amount in either
              direction, while also allowing for the preview of the next slide
              to be consistent.
            </p>
          </div>
          <img
            src="/static/screenshots/netflix-clone-front/translate-percent.png"
            alt=""
          />
          <img
            src="/static/screenshots/netflix-clone-front/slide-flex-basis.png"
            alt=""
          />
          <video
            src="/static/clips/netflix-clone-front/slider-percent.mp4"
            autoPlay
            loop
            muted
            className="mb-8"
          ></video>
          <p>
            The problem with this approach is that it relied on using padding on
            the images to space them out properly. If I tried to use gap or
            margins on the slides, it would throw off the translate, and I would
            end up getting inconsistent shift results as shown below.
          </p>
          <video
            src="/static/clips/netflix-clone-front/slider-gap-1em.mp4"
            autoPlay
            loop
            muted
            className="mb-8"
          ></video>
          <p>
            The reason why using padding on the images to separate the slides
            isn't ideal is because the slides themselves aren't actually
            separated, so if you hover between the gaps, it will actually be
            hovering over a slide still.
          </p>
          <div>
            <h5 className="font-bold">Using getBoundingClientRect():</h5>
            <p>
              The second approach was to use fixed sizes and distances. First, I
              set the slide width to 300px. Then, in order to get the cumulative
              distance per shift, I had to use the getBoundingClientRect()
              method, which returns information about the element's size and
              positioning relative to the viewport. Using that I could get the
              current distance of the shift and then add or subtract 300px.
            </p>
          </div>
          <img
            src="/static/screenshots/netflix-clone-front/translate-fixed.png"
            alt=""
          />
          <img
            src="/static/screenshots/netflix-clone-front/slide-fixed-css.png"
            alt=""
            className="h-64 object-contain mb-8"
          />
          <p>
            This approach appeared to work at first. It also solved the problem
            I had with the first approach, in that I could separate the slides
            with a fixed gap, as opposed to using padding from the images.
            Unfortunately, this approach wasn't consistent when pressing the
            arrows rapidly in quick succession. Also, depending on the number of
            total slides, at the end not having a full set of slides also threw
            off the numbers. The resulting ui is shown below:
          </p>
          <video
            src="/static/clips/netflix-clone-front/slider-fixed.mp4"
            autoPlay
            loop
            muted
            className="mb-8"
          ></video>
          <p>
            Because of that, I ended up resorting back to the first approach I
            discussed.
          </p>

          <div>
            <h5 className="font-bold">Hover Card:</h5>
            <p>
              Another feature to implement, which I thought would be easy, was
              the card that appears when a user hovers over one of the slides. I
              tried to do it the way Netflix has it, where they have a video
              preview on top and buttons and information on the bottom. However,
              since I used flexbox for the slides, when I tried to expand one of
              them, the rest in that row also expanded as well. So instead, I
              tried using position absolute, which stopped the other boxes from
              expanding, but I couldn't get the slide I was hovering over to
              expand beyond the size of the slider container. This meant that I
              couldn't fit everything that Netflix had in their hover card.
            </p>
          </div>
          <p>
            Thus, I decided to just keep the buttons and information, and use a
            semi-transparent black overlay over the slide the user was hovering
            over. It doesn't look as good as the way Netflix has it, but it
            still fits the design well.
          </p>
          <video
            src="/static/clips/netflix-clone-front/hover-card.mp4"
            autoPlay
            loop
            muted
            className="mb-8"
          ></video>

          <div>
            <h5 className="font-bold">
              Fetching a different dataset for each slider:
            </h5>
            <p>
              One new feature I tried in this project was fetching multiple
              datasets at the same time, and then using getStaticProps() to pass
              that information to the respective slider components on the home
              page. To accomplish this, I used three sets of mock data and used
              the next api handler to return the data set depending on the
              category query parameter. I then made the fetches at the same time
              using Promise.all().
            </p>
          </div>
          <img
            src="/static/screenshots/netflix-clone-front/promise-all.png"
            alt=""
          />
          <img
            src="/static/screenshots/netflix-clone-front/promise-all-ui.png"
            alt=""
            className="mb-8"
          />
          <div>
            <h5 className="font-bold">Redirects:</h5>
            <p>
              One feature I used in Next.js that I didn't use in my last project
              was redirects. I had previous experience using the useNavigate
              hook and the Navigate component with React Router, but with
              Next.js I couldn't use those. Instead, I had to use the useRouter
              hook.
            </p>
          </div>
          <p>
            The reason why I needed redirects in this project was because I had
            implemented a user login using the react context api. I didn't want
            a user that wasn't logged in to be able to view the home page or
            watch a video. With useRouter, I could use the push method to
            redirect the user to the register page if they were trying to access
            pages that only logged-in users could access. However, the redirect
            wasn't instant like React Router, so I used a material ui spinner as
            a placeholder, so the content wouldn't show before the redirect
            occurred.
          </p>
          <img
            src="/static/screenshots/netflix-clone-front/useRouter-1.png"
            alt=""
          />
          <img
            src="/static/screenshots/netflix-clone-front/loading-circle.png"
            alt=""
            className="h-64 object-contain"
          />
          <video
            src="/static/clips/netflix-clone-front/redirect.mp4"
            autoPlay
            loop
            muted
            className="mb-8"
          ></video>

          <div>
            <h5 className="font-bold">Conclusion and future improvements:</h5>
            <p>
              Overall, this was a fun project for me! It was definitely a new
              experience for me to directly try and clone a popular website's
              ui. As a Netflix user myself, one of the things I've always liked
              about the ui is how crisp and clean everything feels. The layout
              isn't overly complicated and the user has quick access to
              everything they need. Ironically, that feeling is what made me
              think that the ui would be alot easier to clone than it actually
              was, especially when it came to the image slider. While I wasn't
              able to completely match the Netflix ui, I am still pretty happy
              with how it turned out.
            </p>
          </div>
          <p>
            In the future, I definitely want to try and figure out how to
            achieve the smooth wrap around of the slides in the slider. Most
            likely, I'll have to recreate the total array of slides and put it
            in the new order each time an arrow is pressed.
          </p>
          <video
            src="/static/clips/netflix-clone-front/netflix-image-slider.mp4"
            autoPlay
            loop
            muted
            className="mb-8"
          ></video>
          <p>
            I also want to add the modal that pops up when clicking on the more
            info button in the hover card. It would show a more detailed
            description of the movie or episodes.
          </p>
          <video
            src="/static/clips/netflix-clone-front/netflix-modal.mp4"
            autoPlay
            loop
            muted
            className="mb-8"
          ></video>
        </div>
      </section>
    </ProjectWrapper>
  );
};
export default NetflixCloneFront;
