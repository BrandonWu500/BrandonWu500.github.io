import ProjectWrapper from "@/components/ProjectWrapper";
import Image from "next/image";

const GymDesign = () => {
  return (
    <ProjectWrapper>
      <section
        id="food-delivery-fullstack"
        className="
  mx-auto flex flex-col gap-4 leading-8"
      >
        <h3 className="font-bold text-xl mb-2">
          Gym Website Design with Figma
        </h3>
        <Image
          src="/static/screenshots/gym-design/1.png"
          alt=""
          width={500}
          height={500}
          className="object-contain mb-5"
        />
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-md">Figma Link:</h4>
          <a
            href="https://www.figma.com/file/klkt0NxVSBNmDGtRekWV5d/gym?node-id=0%3A1&t=OQKTszpOquBU3i3C-1"
            target="_blank"
          >
            https://www.figma.com/file/klkt0NxVSBNmDGtRekWV5d/gym?node-id=0%3A1&t=OQKTszpOquBU3i3C-1
          </a>
        </div>

        <div>
          <h4 className="font-semibold mt-8 text-lg">
            Figma Tools I Learned / Gained Experience With:
          </h4>
          <ul className="capitalize list-disc pl-5">
            <li>Auto layout</li>
            <li>Components</li>
            <li>Layout grid</li>
            <li>Constraints</li>
            <li>Reusable text/fill styles</li>
            <li>Plugins</li>
          </ul>
        </div>
      </section>
    </ProjectWrapper>
  );
};
export default GymDesign;
