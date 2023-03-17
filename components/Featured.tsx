import Image from 'next/image';
import Link from 'next/link';
import ProjectWrapper from './ProjectWrapper';

const Featured = () => {
  return (
    <ProjectWrapper>
      <div className="mx-auto text-center py-20">
        <h2 className="text-5xl my-5">Latest Project</h2>
        <p className="text-3xl">
          Food Delivery Full Stack App with Next.js and MongoDB
        </p>
      </div>
      <section
        id="food-delivery-fullstack"
        className="
      mx-auto flex flex-col gap-4 leading-8"
      >
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-md">Github Repo Link:</h4>
          <a
            href="https://github.com/BrandonWu500/food-delivery-app"
            target="_blank"
          >
            https://github.com/BrandonWu500/food-delivery-app
          </a>
        </div>
        <h4 className="font-semibold text-md">Video Walkthrough:</h4>
        <iframe
          height="315"
          src="https://www.youtube.com/embed/Gt2OOgQCIYQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full"
        ></iframe>

        {/* food delivery fullstack case study */}
        <div className="font-arial flex flex-col gap-4">
          <h4 className="font-semibold mt-8 text-lg">Case Study:</h4>
          <div>
            <h5 className="font-bold">Intro:</h5>
            <p>
              In this project, I continued to build on the food delivery app
              frontend that I did previously. I used MongoDB, with the Mongoose
              ODM library, and the Next.js api handler to implement the backend
              and make the food delivery app a full stack app.
            </p>
          </div>
          <p>
            I had used MongoDB and Mongoose in previous projects, but it was
            with Express.js instead of Next.js. That being said, the actual
            syntax and setup of the code was very similar. Another difference
            this time around was that I used TypeScript.
          </p>
          <div>
            <h5 className="font-bold">Schemas with TypeScript:</h5>
            <p>
              Since I was using TypeScript, I decided to use enums in my
              mongoose schema definitions. I used this in the order schema for
              the status and payment method properties because it made it easier
              to understand what the property represented and what was being
              stored, but still being able to use number values which were
              required based on the logic I had in the components on the
              frontend.
            </p>
          </div>
          <Image
            src="/static/screenshots/food-delivery-fullstack/schema-enums.png"
            alt=""
            width={300}
            height={300}
            className="object-contain mx-auto my-2"
          />
          <p>
            Also, I got a chance to practice a wider variety of TypeScript types
            like Omit, Partial and intersection, which I had to use to properly
            export the mongoose schema types and be able to use them on the
            frontend.
          </p>
          <Image
            src="/static/screenshots/food-delivery-fullstack/schema-types.png"
            alt=""
            width={500}
            height={500}
            className="object-contain my-2"
          />
          <div>
            <h5 className="font-bold">localStorage cart with redux:</h5>
            <p>
              Another difference from the MERN shopping app that I did
              previously was that I decided against having a model for users.
              Since there was no user login or account system for the app, I
              just used localStorage in combination with redux to create a cart
              that was tied to the browser.
            </p>
          </div>
          <div>
            <Image
              src="/static/screenshots/food-delivery-fullstack/cart-slice-1.png"
              alt=""
              width={500}
              height={500}
              className="object-contain my-2"
            />
            <Image
              src="/static/screenshots/food-delivery-fullstack/cart-slice-2.png"
              alt=""
              width={500}
              height={500}
              className="object-contain my-2"
            />
          </div>
          <p>
            While the cart functionality is more simplified this time, it still
            provides the user with the essential cart features of adding and
            deleting products along with clearing the entire cart. The nice part
            about using this approach with localStorage is that it saves a lot
            of code from having to set up a users model and api, and also makes
            the cart updates instant because we don't have to make an async
            request to a database. I think for the purposes of this app, this
            works out fine.
          </p>
          <Image
            src="/static/screenshots/food-delivery-fullstack/cart-ui.png"
            alt=""
            width={500}
            height={500}
            className="object-contain my-2"
          />
          <div>
            <h5 className="font-bold">{`Modals (aka popups):`}</h5>
            <p>
              I definitely spent the most time on creating modals in this
              project. Luckily for me, I've always enjoyed creating modals. In
              fact, they're probably my favorite UI component to create besides
              an image slider. I created four modal components in total. At
              first, I tried to make them one component and pass them props, but
              they ended up being a little too different, and it would have been
              much more complicated than just creating separate components.
              Also, it probably would have been a nightmare to read the code.
            </p>
          </div>
          <div>
            <p className="font-bold text-sm">Clear cart modal:</p>
            <Image
              src="/static/screenshots/food-delivery-fullstack/clear-cart-modal.png"
              alt=""
              width={500}
              height={500}
              className="object-contain my-2"
            />
          </div>
          <div>
            <p className="font-bold text-sm">Cash on delivery modal:</p>
            <Image
              src="/static/screenshots/food-delivery-fullstack/cash-modal.png"
              alt=""
              width={500}
              height={500}
              className="object-contain my-2"
            />
          </div>
          <div>
            <p className="font-bold text-sm">Add item modal:</p>
            <Image
              src="/static/screenshots/food-delivery-fullstack/add-modal.png"
              alt=""
              width={500}
              height={500}
              className="object-contain my-2"
            />
          </div>
          <div>
            <p className="font-bold text-sm">Edit item modal:</p>
            <Image
              src="/static/screenshots/food-delivery-fullstack/edit-modal.png"
              alt=""
              width={500}
              height={500}
              className="object-contain my-2"
            />
          </div>
          <p>
            As you can see, they all have somewhat different styles. I did this
            on purpose because it gave me a chance to practice different types
            of modals, but in a production app, it might make more sense to have
            a more similar theme/layout.
          </p>
          <div>
            <h5 className="font-bold">Add Item Modal vs. Edit Item Modal:</h5>
            <p>
              The two modals I want to focus on are the add item modal and the
              edit item modal. These two took the longest to make because they
              both have a file upload component along with handling multiple
              prices. In both of them I used a post request to a Cloudinary api
              url, which basically will store digital assets in the cloud,
              similar to Firebase.
            </p>
          </div>
          <Image
            src="/static/screenshots/food-delivery-fullstack/image-upload.png"
            alt=""
            width={500}
            height={500}
            className="object-contain my-2"
          />
          <p>
            {`However, I decided to approach the price inputs differently. With
            the Add Item modal, I used multiple input fields with each
            corresponding to a size (small, medium, large). The problem with
            this approach is that if I only want to add 1 item price, or more
            than 3 item prices it becomes a little more awkward to do. So, in
            the Edit Item modal, I used a single input field and had the admin
            user separate the different prices they wanted with a comma and a
            space. Then when submitting the form, I converted the string back
            into an array of numbers to fit the type specified in the schema.`}
          </p>
          <div>
            <Image
              src="/static/screenshots/food-delivery-fullstack/edit-modal-prices-1.png"
              alt=""
              width={500}
              height={500}
              className="object-contain my-2"
            />
            <Image
              src="/static/screenshots/food-delivery-fullstack/edit-modal-prices-2.png"
              alt=""
              width={500}
              height={500}
              className="object-contain my-2"
            />
          </div>
          <div>
            <h5 className="font-bold">Admin Dashboard Page:</h5>
            <p>
              I also added an admin dashboard page directly in the website
              because there were only two models in this project, and I wanted
              to maintain the app's simple theme and prototype nature.
            </p>
          </div>
          <Image
            src="/static/screenshots/food-delivery-fullstack/admin-dash-ui.png"
            alt=""
            width={500}
            height={500}
            className="object-contain my-2"
          />
          <p>
            The tables are similar to previous projects I have done in terms of
            their functionality, except in the orders table there is a next
            stage button. This will update the order status in the database.
            Originally, I used the js filter method to update the table, but the
            problem was that I couldn't get the order of the table to stay the
            same. It's not that big of a deal, but it could be annoying for an
            admin to have to scroll all the way to the top of the table to see
            their updated order. So, instead I used the js slice method to
            create an array containing: all the elements before the updated
            element, the updated element, and then all the elements after the
            updated element. This way it preserves the order in the table.
          </p>
          <div>
            <Image
              src="/static/screenshots/food-delivery-fullstack/next-stage-1.png"
              alt=""
              width={500}
              height={500}
              className="object-contain my-2"
            />
            <Image
              src="/static/screenshots/food-delivery-fullstack/next-stage-2.png"
              alt=""
              width={500}
              height={500}
              className="object-contain my-2"
            />
          </div>
          <p>
            Then, using the useSWR hook from Vercel, I can consistently
            revalidate the data on the client-side, to give the user real-time
            tracking of their order.
          </p>
          <video
            src="/static/clips/food-delivery-fullstack/next-stage.mp4"
            loop
            autoPlay
            muted
          ></video>
          <Image
            src="/static/screenshots/food-delivery-fullstack/use-swr.png"
            alt=""
            width={300}
            height={300}
            className="object-contain my-2 mx-auto"
          />
          <div>
            <h5 className="font-bold">Cookies:</h5>
            <p>
              The last thing I want to touch on is the admin login process.
              Since this is more of a simple app, I used cookies to store a
              token after the admin successfully logged in. Then I would check
              if the user had the right token in their cookies when trying to do
              admin things like accessing the admin dashboard page or adding a
              new item to the database.
            </p>
          </div>
          <Image
            src="/static/screenshots/food-delivery-fullstack/login-handler.png"
            alt=""
            width={400}
            height={400}
            className="object-contain my-2 mx-auto"
          />
          <p>
            When accessing the admin dashboard page without the right token it
            will redirect the user back to the admin login page through the
            redirect property in getServerSideProps.
          </p>
          <Image
            src="/static/screenshots/food-delivery-fullstack/admin-redirect.png"
            alt=""
            width={400}
            height={400}
            className="object-contain my-2 mx-auto"
          />
          <video
            src="/static/clips/food-delivery-fullstack/admin-redirect.mp4"
            loop
            autoPlay
            muted
          ></video>
          <p>
            For other features like adding a new item to the database, I only
            showed the button if the admin recently logged in and had the right
            token in their cookies.
          </p>
          <Image
            src="/static/screenshots/food-delivery-fullstack/admin-check-add-item.png"
            alt=""
            width={400}
            height={400}
            className="object-contain my-2 mx-auto"
          />
          <p>
            Also, if for some reason a user was making a post request to the
            products api endpoint, they would receive a 403 response because
            only admins should be allowed to create new items.
          </p>
          <Image
            src="/static/screenshots/food-delivery-fullstack/admin-check-api.png"
            alt=""
            width={400}
            height={400}
            className="object-contain my-2 mx-auto"
          />
          <div>
            <h5 className="font-bold">Conclusion:</h5>
            <p>
              I really enjoyed turning this frontend into a full stack app! It
              definitely gave me a good refresher on MongoDB and Mongoose, along
              with writing REST API routes and endpoints. Overall, I think I am
              much more comfortable with Next.js now, and I can definitely see
              myself building more full stack projects with it in the future
              when combined with MongoDB, especially because the deployment
              process is also fast and easy with Vercel. Additionally, I got to
              experiment with a couple new features that I hadn't really used in
              previous projects like SWR and cookies.
            </p>
          </div>
          <div>
            <h5 className="font-bold">Future Improvements:</h5>
            <p>
              I tried to keep this project more on the simpler side because I
              wanted to focus on learning Next.js and refreshing my memory of
              MongoDB and Redux. With that said, I think the website has enough
              functionality to work as a full stack app for a user, and serve as
              a good prototype to build off of. As I was writing this case study
              and doing the walkthrough I definitely noticed multiple areas
              where I could improve the app. Some of them include:
            </p>
          </div>
          <div className="px-10">
            <ul className="list-decimal">
              <li>
                adding the option to add, edit, and remove extras from products
                in the edit item modal
              </li>
              <li>
                fixing size options so they better correspond to the specific
                item
              </li>
              <li>
                adding a users model and account system with a rewards program
              </li>
            </ul>
          </div>
          <p>
            I will definitely be looking to fix/add these features in the
            future!
          </p>
        </div>
      </section>
      <Link href="/projects">
        <button className="capitalize bg-slate-800 text-white p-5 mt-10 block mx-auto rounded hover:scale-95">
          Learn about my other projects
        </button>
      </Link>
    </ProjectWrapper>
  );
};
export default Featured;
