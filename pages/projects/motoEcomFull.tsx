import ProjectWrapper from "@/components/ProjectWrapper";
import { SCREENSHOTS } from "@/data/motoEcomFull";
import Image from "next/image";

const MotoEcomFront = () => {
  return (
    <ProjectWrapper>
      <section
        id="food-delivery-fullstack"
        className="mx-auto flex flex-col gap-4 leading-8"
      >
        <h3 className="font-bold text-xl mb-2 flex flex-col">
          <span>{`Full Stack (MERN)`}</span>
          <span>Motorcycle E-Commerce Mobile App</span>
          <span>with React Native</span>
        </h3>
        <Image
          src="/static/screenshots/moto-ecom-full/1.png"
          alt=""
          width={200}
          height={200}
          className="object-contain mx-auto mb-5"
        />
        <section
          id="food-delivery-fullstack"
          className="
      mx-auto flex flex-col gap-4 leading-8"
        >
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-md">Github Repo Link:</h4>
            <p>
              <span className="font-medium">Frontend: </span>
              <a
                href="https://github.com/BrandonWu500/motorcycle-ecommerce-mobile-app"
                target="_blank"
              >
                https://github.com/BrandonWu500/motorcycle-ecommerce-mobile-app
              </a>
            </p>
            <p>
              <span className="font-medium">Backend: </span>
              <a
                href="https://github.com/BrandonWu500/motorcycle-ecommerce-api"
                target="_blank"
              >
                https://github.com/BrandonWu500/motorcycle-ecommerce-api
              </a>
            </p>
          </div>
          <p className="font-semibold mt-5">Walkthrough Video:</p>
          <iframe
            height="315"
            src="https://www.youtube.com/embed/B2B-jukNSm4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
          ></iframe>

          <p className="font-semibold mt-5">Screenshots:</p>
          <ul className="grid grid-cols-2 gap-5">
            {SCREENSHOTS.map((screenshot, idx) => (
              <li key={idx}>
                <Image
                  src={screenshot}
                  alt=""
                  width={200}
                  height={200}
                  className="object-contain mx-auto"
                />
              </li>
            ))}
          </ul>

          {/* brief project overview */}
          <div>
            <h4 className="font-semibold mt-8 text-lg">
              What I Learned / Gained Experience With:
            </h4>
            <ul className="capitalize list-disc pl-5">
              <li>{`React Native (with Expo)`}</li>
              <li>{`React Navigation (Native Stack Navigator)`}</li>
              <li>React Native Styles</li>
              <li>Redux Toolkit</li>
              <li>{`Custom Selectors (with Redux Toolkit)`}</li>
              <li>Stripe</li>
              <li>MERN Stack</li>
              <li>RTK Query</li>
              <li>Custom Hooks</li>
              <li>Debounce</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mt-8 text-lg">App Features:</h4>
            <ul className="capitalize list-disc pl-5">
              <li>{`Motorcycle Products Screen (2-column layout)`}</li>
              <li>{`Product Details Screen/Modal with horizontal image carousel`}</li>
              <li>Cart Screen with Order Summary fixed to bottom of screen</li>
              <li>Ability to add and remove products from cart</li>
              <li>Checkout with Stripe</li>
              <li>Order Tracking</li>
              <li>Alerts for adding to cart and creating order</li>
            </ul>
          </div>
        </section>
      </section>
    </ProjectWrapper>
  );
};
export default MotoEcomFront;
