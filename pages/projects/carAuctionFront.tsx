import ProjectWrapper from "@/components/ProjectWrapper";
import { SCREENSHOTS } from "@/data/carAuctionFront";
import Image from "next/image";

const CarAuctionFront = () => {
  return (
    <ProjectWrapper>
      <section
        id="food-delivery-fullstack"
        className="
      mx-auto flex flex-col gap-4 leading-8"
      >
        <h3 className="font-bold text-xl mb-2">
          Car Auction Frontend with Three.js
        </h3>
        <Image
          src="/static/screenshots/car-auction/landing-page.png"
          alt=""
          width={500}
          height={500}
          className="object-contain mb-5"
        />
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-md">Github Repo Link:</h4>
          <a href="https://github.com/BrandonWu500/car-auction" target="_blank">
            https://github.com/BrandonWu500/car-auction
          </a>
        </div>
        <p className="font-semibold mt-5">Walkthrough Video:</p>
        <iframe
          height="315"
          src="https://www.youtube.com/embed/dc09aMJr49Y"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full"
        ></iframe>
        <div className="flex flex-col gap-1 mt-5">
          <h4 className="font-semibold text-md">{`Try it yourself! (Deployment Link)`}</h4>
          <a
            href="https://brandonwu500-car-auction.vercel.app/"
            target="_blank"
          >
            https://brandonwu500-car-auction.vercel.app/
          </a>
        </div>

        <p className="font-semibold mt-5">Screenshots:</p>
        <ul className="grid grid-cols-1 gap-5">
          {SCREENSHOTS.map((screenshot, idx) => (
            <li key={idx}>
              <Image
                src={screenshot}
                alt=""
                width={500}
                height={500}
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
            <li>snap scroll effect</li>
            <li>CSS animations</li>
            <li>react bootstrap / bootstrap</li>
            <li>styled components</li>
            <li>react three fiber / three.js</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mt-8 text-lg">App Features:</h4>
          <ul className="capitalize list-disc pl-5">
            <li>3D models of cars</li>
            <li>Bidding</li>
            <li>Cool distorting sphere background in about section</li>
            <li>Contact form</li>
            <li>
              {`SPA using url fragments for navigation as opposed to react-router
              (for scroll effect)`}
            </li>
            <li>Specific car navigation</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mt-8 text-lg">Future Improvements:</h4>
          <ul className="capitalize list-disc pl-5">
            <li>add more car information / stats</li>
            <li>adding backend</li>
          </ul>
        </div>
      </section>
    </ProjectWrapper>
  );
};
export default CarAuctionFront;
