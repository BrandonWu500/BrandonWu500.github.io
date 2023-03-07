import ProjectWrapper from '@/components/ProjectWrapper';

const mernShop = () => {
  return (
    <ProjectWrapper>
      <section className="mx-auto flex flex-col gap-4 leading-8" id="mern-shop">
        <h3 className="font-bold text-lg">MERN Shopping App</h3>
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-md">Github Repo Link:</h4>
          <a
            href="https://github.com/BrandonWu500/ecommerce-mern-app"
            target="_blank"
          >
            https://github.com/BrandonWu500/ecommerce-mern-app
          </a>
        </div>

        <p>Below is a video walkthrough of the app's functionality:</p>
        <iframe
          height="315"
          src="https://www.youtube-nocookie.com/embed/pbEavbJXqs8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full"
        ></iframe>

        {/* <!-- mern shop case study --> */}
        <div className="flex flex-col gap-4 font-arial">
          <h4 className="font-semibold text-lg mt-8">Case Study:</h4>
          <p>
            Before attempting this project, I had already done a few projects
            with React and a group project with the MERN Stack. However, I
            hadn't really done a big project by myself with the MERN Stack. I
            decided on the idea of a shopping website because it was something I
            had used myself before, and I could reference those websites that I
            had used when building the project (like Amazon for example). A
            shopping website also has a variety of different features that could
            help me practice my skills with React, specifically with managing
            state changes in multiple places (by using Redux Toolkit). It would
            also provide me an opportunity to utilize multiple models in
            MongoDB, but be common enough that there would be documentation or
            examples out there to guide me if I got stuck on the logic of a
            controller.
          </p>
          <p>
            In terms of actually building the project, I started off by building
            a mobile-responsive frontend using React, Redux Toolkit and
            styled-components. I already had experience with all of these
            technologies, and I thought the familiarity I had would make it
            easier as a starting point. It would also give me insight as to what
            models and controllers that I would need in the backend.
          </p>
          <p>
            One of the big problems I ran into when building the frontend was
            figuring out how I was going to handle different requests based on
            whether they were a logged-in user or a guest user. I thought it was
            important to handle this distinction because most shopping websites
            don't require you to make an account to make an order. However, this
            was my first time handling this type of distinction in a project, so
            it took me a bit of trial and error.
          </p>
          <p>
            At first, I tried using the same functions in Redux Toolkit and just
            changing the logic based on whether they were a user or a guest. I
            thought I would have to do this because I needed to save the cart
            regardless of whether they were signed in or not. However, after
            trying it out, I realized that it was impractical to save a guest's
            cart in the database because they wouldn't have a user id. Next, I
            thought about just having a guest user id in the database, but I
            realized that this solution could potentially run into problems if I
            ended up allowing users to save multiple carts (like a wishlist cart
            for example). Finally, I decided to use localStorage to save the
            guest's cart. This way the guest's cart could be saved to the
            browser, and I made it so if they logged in as a user it would clear
            the localStorage cart. Also, since I ended up using localStorage as
            opposed to the database, I had to use a different set of reducers in
            the redux because I no longer needed to make axios requests to the
            database for a guest. For the logged-in user requests to the
            database, I used the extraReducers feature in Redux Toolkit, which
            let me specifically target the pending, fulfilled, and rejected
            states resulting from the promises returned by the axios requests.
          </p>
          <p>
            This was how I ended up setting up my reducers in redux toolkit to
            handle changes to the guest cart:
          </p>
          <img
            src="/static/screenshots/mern-shop/mern-shop-guest-redux.png"
            alt=""
            className="mb-8"
          />
          <p>
            This was how I ended up using the extraReducers in redux toolkit to
            handle the changes to the user's cart:
          </p>
          <img
            src="/static/screenshots/mern-shop/mern-shop-user-redux.png"
            alt=""
            className="mb-8"
          />
          <p>
            This was how I ended up setting up my functions to make requests to
            the backend api with redux toolkit:
          </p>
          <img
            src="/static/screenshots/mern-shop/mern-shop-cart-service.png"
            alt=""
            className="mb-8"
          />
          <p>
            After building the frontend, I determined that I would need four
            different models in the backend: users, carts, orders, and products.
            Each of those models would have their respective routes and
            controllers. However, additionally I needed routes and controller
            logic to handle the checkout process. I used Stripe to help with the
            payments because it was a popular choice and seemed straightforward
            to use.
          </p>
          <p>
            I had helped build a backend in the past using MongoDB, Express, and
            NodeJS. However, this was my first time building a backend, with
            multiple models, on my own using these technologies. I started off
            just setting up the routes and models with basic controller logic
            just to see if everything was working. I used Postman to test my api
            endpoints along the way.
          </p>
          <p>
            One of the biggest challenges I ran into when building the backend
            was setting up the models properly with the right properties. This
            was especially apparent in the products schema. At first, I thought
            I could set the color and size properties to an array of strings,
            similar to the categories property. This worked fine when rendering
            the different options on the product info page. However, as I was
            testing the add to cart process, I realized that products with the
            same title and different colors or sizes were being treated as the
            same product in the cart. This meant that the user couldn't view or
            update their choices separately based on the different color or size
            of the product. Another problem was the image being rendered was
            always the same, regardless of the color. To remedy this, I decided
            to change the color and size properties in the schema to be an array
            of objects instead and give a separate product id to each color and
            size.
          </p>
          <img
            src="/static/screenshots/mern-shop/product-schema.png"
            alt=""
            className="object-contain h-96"
          />
          <p>
            This did end up working out where the different colors and sizes
            were being rendered separately in the cart, which allowed the user
            to update the items without affecting others with the same title.
            However, after completing the project and analyzing the code, I
            realized that it would have been a lot simpler to save the color and
            size properties as strings. Then, have a separate product id for
            each color and size. Finally, when rendering the product info, doing
            a lookup in the database based on the title of the product rather
            than the id.
          </p>
          <img
            src="/static/screenshots/mern-shop/product-controller.png"
            alt=""
          />
          <p>
            Overall, it was fun building this project and I learned a lot! I had
            been learning a few of the technologies I used in this project
            separately, but building this project gave me more experience
            putting them all together. I am still definitely more comfortable
            with the frontend, but I do feel more familiar with the backend now.
            As I was building the backend, it also gave me more ideas to add to
            the frontend, along with improving the existing features.
          </p>
          <p>
            After building this project, the next idea I have is to build an
            admin dashboard using the MERN Stack to make it easier and more
            efficient to handle the backend for the shopping app. The admin
            dashboard could also be used in future projects besides just the
            shopping app.
          </p>
        </div>
      </section>
    </ProjectWrapper>
  );
};
export default mernShop;
