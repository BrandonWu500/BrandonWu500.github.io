import Image from "next/image";
import Link from "next/link";
import ProjectWrapper from "./ProjectWrapper";
import { SCREENSHOTS } from "@/data/motoEcomFull";

const Featured = () => {
  return (
    <ProjectWrapper>
      <div className="mx-auto text-center pb-10">
        <h2 className="text-5xl">Latest Project</h2>
        <p className="text-3xl my-5">{`Full Stack (MERN)`}</p>
        <p className="text-3xl my-5">Motorcycle E-Commerce</p>
        <p className="text-3xl my-5">Mobile App with React Native</p>
        <Image
          src="/static/screenshots/moto-ecom-full/1.png"
          alt=""
          width={200}
          height={200}
          className="object-contain mx-auto"
        />
      </div>
      <section
        id="food-delivery-fullstack"
        className="
      mx-auto flex flex-col gap-4 leading-8"
      >
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-md">Github Repo Link:</h3>
          <a
            href="https://github.com/BrandonWu500/motorcycle-ecommerce-mobile-app"
            target="_blank"
          >
            https://github.com/BrandonWu500/motorcycle-ecommerce-mobile-app
          </a>
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
          <h3 className="font-semibold mt-8 text-lg">
            What I Learned / Gained Experience With:
          </h3>
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
          <h3 className="font-semibold mt-8 text-lg">App Features:</h3>
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
      <Link href="/projects">
        <button className="capitalize bg-slate-800 text-white p-5 mt-10 block mx-auto rounded hover:bg-slate-700">
          Learn about my other projects
        </button>
      </Link>
    </ProjectWrapper>
  );
};
export default Featured;
