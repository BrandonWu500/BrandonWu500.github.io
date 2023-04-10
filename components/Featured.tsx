import Image from "next/image";
import Link from "next/link";
import ProjectWrapper from "./ProjectWrapper";
import { SCREENSHOTS } from "@/data/motoEcomFront";

const Featured = () => {
  return (
    <ProjectWrapper>
      <div className="mx-auto text-center pb-10">
        <h2 className="text-5xl">Latest Project</h2>
        <p className="text-3xl my-5">Motorcycle E-Commerce</p>
        <p className="text-3xl my-5">Mobile Frontend with React Native</p>
        <Image
          src="/static/screenshots/moto-ecom-mobile-front/1.png"
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
          <h4 className="font-semibold text-md">Github Repo Link:</h4>
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
          src="https://www.youtube.com/embed/SNgQa6cNuF0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full"
        ></iframe>

        <p className="font-semibold mt-5">Screenshots:</p>
        <ul className="grid grid-cols-2 gap-5">
          {SCREENSHOTS.map((screenshot) => (
            <li>
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
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mt-8 text-lg">App Features:</h4>
          <ul className="capitalize list-disc pl-5">
            <li>{`Motorcycle Products Screen (2-column layout)`}</li>
            <li>{`Product Details Screen/Modal with horizontal image carousel`}</li>
            <li>Cart Screen with Order Summary fixed to bottom of screen</li>
            <li>Ability to add and remove products from cart</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mt-8 text-lg">Future Improvements:</h4>
          <ul className="capitalize list-disc pl-5">
            <li>Add backend and integrate</li>
            <li>Use RTK Queries to fetch data</li>
            <li>Add toast letting user know they added item to cart</li>
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
