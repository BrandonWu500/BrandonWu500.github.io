import ProjectWrapper from "@/components/ProjectWrapper";
import Link from "next/link";

const foodDeliveryFront = () => {
  return (
    <ProjectWrapper>
      <section
        id="food-delivery-frontend"
        className="mx-auto flex flex-col gap-4 leading-8"
      >
        <h3 className="font-bold text-lg">
          Food Delivery Frontend with Next.js
        </h3>
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-md">Github Repo Link:</h4>
          <a
            href="https://github.com/BrandonWu500/food-delivery-app/tree/frontend-only"
            target="_blank"
          >
            https://github.com/BrandonWu500/food-delivery-app/tree/frontend-only
          </a>
        </div>

        <p className="font-semibold mt-5">Walkthrough Video:</p>
        <iframe
          height="315"
          src="https://www.youtube.com/embed/K0YgmeKF9-o"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full"
        ></iframe>

        {/* <!-- food delivery frontend case study --> */}
        <div className="font-arial flex flex-col gap-4">
          <h4 className="font-semibold mt-8 text-lg">Case Study:</h4>
          <div>
            <h5 className="font-bold">Intro:</h5>
            <p>
              In this project I built a mock frontend for a food delivery
              website. I used Next.js along with TypeScript and Sass. The app is
              also mobile-responsive.
            </p>
          </div>
          <p>
            This was my first project that I built with Next.js. So, I decided
            to build something similar to the MERN e-commerce website that I had
            done previously. This way I could focus on learning Next.js and
            trying out its different features. That being said, there are still
            some key differences though.
          </p>
          <div>
            <h5 className="font-bold">Image Slider:</h5>
            <p>
              One of the differences is the image slider that cycles through the
              featured content on the home page. At first glance it seems
              similar to the one I had in the shopping app. They both have
              autoPlay and manual navigation. However, the big difference is
              that this time I used opacity (css property) to transition between
              the slides, as opposed to shifting them using translate (css
              property). I wanted to try building the image slider in a
              different way not only to improve my CSS skills, but also because
              it can give me more options in the future depending on what effect
              a client might want.
            </p>
          </div>
          <img
            src="/static/screenshots/food-delivery/autoplay.png"
            alt=""
            className="mb-8"
          />
          <p>
            Like last time, I attach a React ref to the slide change function. I
            then use setInterval to repeatedly call that function, until a user
            clicks on the manual navigation.
          </p>
          <div>
            <h5 className="font-bold">Order Progress Page:</h5>
            <p>
              Another big difference was the order progress page. This was a
              feature I didn't have in the e-commerce app. I felt this was
              important to add because most food delivery services have it, and
              it helps the user gauge when their food will arrive. It also gave
              me a chance to experiment with css in ways that I hadn't done
              previously. For example, when rendering the different steps in the
              order process, I passed a function to the className name. Through
              that function I was able to return a className name based on the
              order status that was fetched. I did this by using a typescript
              enum to represent the different order status strings as integer
              values.
            </p>
          </div>
          <img
            src="/static/screenshots/food-delivery/enum-1.png"
            alt=""
            className="h-36 object-contain"
          />
          <img
            src="/static/screenshots/food-delivery/enum-2.png"
            alt=""
            className="object-contain"
          />
          <img
            src="/static/screenshots/food-delivery/enum-3.png"
            alt=""
            className="object-contain"
          />
          <img
            src="/static/screenshots/food-delivery/enum-4.png"
            alt=""
            className="mb-8"
          />
          <p>
            Using the className name I returned, I was then able to use a css
            animation to alternate the opacity between 0 and 1 to give that in
            progress flicker effect.
          </p>
          <img
            src="/static/screenshots/food-delivery/css-animation.png"
            alt=""
          />
          <video
            src="/static/clips/food-delivery-frontend/flicker-animation.mp4"
            loop
            muted
            autoPlay
            className="mb-8"
          ></video>
          <div>
            <h5 className="font-bold">Mobile Responsive Table Layout:</h5>
            <p>
              The last big difference from my previous projects was how I styled
              the html tables in the mobile responsive layout. One of the main
              problems I had when working with html tables in mobile layouts is
              that I was struggling to fit all the content on the page while
              still making it easy to read and access the information. I tried
              changing text size and experimenting with different overflow
              styles, but they felt a little awkward.
            </p>
          </div>
          <p>
            So instead, this time I found a way to lay the html table out
            vertically. I couldn't do this in the past because of how html table
            headers work. To get around this, I just removed them all together
            in the mobile layout. I then used the css pseudo-element selector
            “before” to add the appropriate headers to the table values as seen
            in the cart page layout.
          </p>
          <img
            src="/static/screenshots/food-delivery/cart-mobile-css.png"
            alt=""
            className="h-72 object-contain mb-8"
          />
          <p>Desktop Layout:</p>
          <img
            src="/static/screenshots/food-delivery/cart-desktop.png"
            alt=""
            className="object-contain mb-8"
          />
          <p>Mobile Layout:</p>
          <img
            src="/static/screenshots/food-delivery/cart-mobile.png"
            alt=""
            className="h-64 object-contain mb-8"
          />

          <div>
            <h5 className="font-bold">Next.js Features I Used:</h5>
            <p>
              Now that I've discussed key differences in the project besides
              adding Next.js, I want to actually talk about some of the Next
              features that I ended up using.
            </p>
          </div>
          <div>
            <h5 className="font-bold">API Routes and Data Fetching:</h5>
            <p>
              One of the great things about Next.js I learned is that you can
              build your own api that receives requests and handles responses
              without needing a backend framework like Express. While I only
              used static mock data in this frontend project, I was still able
              to return the data as a response from the api. This meant that I
              could write my code on the frontend as if I was working with
              dynamic data from a backend. It was also easy to set up dynamic
              api routes where I could fetch specific data based on the url
              query parameters. Here is an example of that:
            </p>
          </div>
          <img
            src="/static/screenshots/food-delivery/dynamic-route-api.png"
            alt=""
            className="mb-8"
          />
          <p>
            In order to render the paths from the dynamic routes we have to use
            the function getStaticPaths(). I used it to create the individual
            product info pages through the product ids returned from the api.
          </p>
          <img
            src="/static/screenshots/food-delivery/static-props-and-paths.png"
            alt=""
          />
          <p>
            Then after creating those paths, I could use getStaticProps() to
            fetch the data for the product with the id in the url path and
            render that specific product's information on the page.
          </p>
          <p>
            Another example of when I utilized next api routes is when fetching
            data for restaurant locations in the footer. I used a free 3rd-party
            api, randomuser.me, that generated placeholder information. Since it
            returned a lot more information than I actually needed, I used the
            next api handler function to filter out only the information I
            needed. I then returned the relevant information as the json
            response.
          </p>
          <img
            src="/static/screenshots/food-delivery/location-api-handler.png"
            alt=""
            className="mb-8"
          />
          <p>
            This way when I actually fetched the location data in my footer
            component, I could directly use the information there without
            needing to process it. The benefit to this is that it makes the code
            much cleaner and more modular. Also, in order to reduce the number
            of requests I made to the api as well as keeping the restaurant
            locations consistent, I saved the location data to localStorage.
            This way it appears more realistic as the restaurant locations
            probably wouldn't change that frequently.
          </p>
          <div>
            <h5 className="font-bold">Conclusion:</h5>
            <p>
              Overall, I enjoyed learning Next.js and building my first project
              with it! I think having some experience with Express helped me
              pick up the Next api handler faster, which was nice. After using
              some of its features, I can definitely see why Next is so popular
              for building React apps for production. On top of that it also
              improves SEO compared to a traditional React app. Because of all
              that, I will probably be building another project with Next.
              Additionally, since I have some experience with Next now, I will
              be looking to build something more different than my previous
              projects. Most likely, a streaming service app like Netflix.
            </p>
          </div>
        </div>
      </section>
      <Link href="/projects/foodDeliveryFullStack">
        <button className="capitalize bg-slate-800 text-white p-5 mt-10 block mx-auto rounded hover:bg-slate-700">
          Learn about how I turned this into a full stack app
        </button>
      </Link>
    </ProjectWrapper>
  );
};
export default foodDeliveryFront;
