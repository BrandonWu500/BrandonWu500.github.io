import ProjectWrapper from "@/components/ProjectWrapper";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <ProjectWrapper>
      <div className="mb-12">
        <h2 className="text-center font-bold text-xl mb-4">PROJECTS</h2>
        <p className="text-center text-lg">
          Click on a project to learn more about it.
        </p>
      </div>
      <ul className="min-h-screen space-y-12 text-center">
        <li>
          <div className="font-semibold text-lg grid grid-cols-2 items-center gap-5">
            <div>
              <Link href="/projects/mernShop" className="font-bold">
                <p>MERN Stack</p> <p>Shopping App</p>
              </Link>
            </div>
            <Link href="/projects/mernShop">
              <Image
                src="/static/screenshots/mern-shop/landing-page.png"
                alt=""
                width={500}
                height={500}
                className="object-contain mb-5"
              />
            </Link>
          </div>
        </li>
        <li>
          <div className="font-medium text-lg grid grid-cols-2 items-center gap-5">
            <div className="-translate-y-2">
              <Link href="/projects/adminDashFront" className="font-bold">
                <p className="mb-4">Admin Dashboard</p>
              </Link>
              <ol className="list-decimal pl-5 space-y-4 mt-2 text-start">
                <li>
                  <Link href="/projects/adminDashFront" className="text-lg">
                    Frontend only
                  </Link>
                </li>
                <li>
                  <Link href="/projects/adminDashFirebase" className="text-lg">
                    Fullstack with Firebase
                  </Link>
                </li>
              </ol>
            </div>
            <Link href="/projects/adminDashFront">
              <Image
                src="/static/screenshots/admin-firebase/landing-page.png"
                alt=""
                width={500}
                height={500}
                className="object-contain mb-5"
              />
            </Link>
          </div>
        </li>
        <li>
          <div className="font-medium text-lg grid grid-cols-2 items-center gap-5">
            <div className="-translate-y-2">
              <Link href="/projects/foodDeliveryFront" className="font-bold">
                <p>Food Delivery App</p> <p>with Next.js</p>
              </Link>
              <ol className="list-decimal pl-5 space-y-4 mt-2 text-start">
                <li>
                  <Link href="/projects/foodDeliveryFront" className=" text-lg">
                    Frontend only
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/foodDeliveryFullStack"
                    className=" text-lg"
                  >
                    Fullstack with MongoDB
                  </Link>
                </li>
              </ol>
            </div>
            <Link href="/projects/foodDeliveryFront">
              <Image
                src="/static/screenshots/food-delivery-fullstack/landing-page-screenshot.png"
                alt=""
                width={500}
                height={500}
                className="object-contain mb-5"
              />
            </Link>
          </div>
        </li>
        <li>
          <div className="font-semibold text-lg grid grid-cols-2 items-center gap-5">
            <Link href="/projects/netflixCloneFront" className="font-bold">
              <div>
                <p>Netflix Clone Frontend</p> <p>with Next.js</p>
              </div>
            </Link>
            <Link href="/projects/netflixCloneFront">
              <Image
                src="/static/screenshots/netflix-clone-front/landing-page.png"
                alt=""
                width={500}
                height={500}
                className="object-contain mb-5"
              />
            </Link>
          </div>
        </li>
        <li>
          <div className="font-semibold text-lg grid grid-cols-2 items-center gap-5">
            <Link href="/projects/carAuctionFront" className="font-bold">
              <div>
                <p>Car Auction Frontend</p> <p>with Three.js</p>
              </div>
            </Link>
            <Link href="/projects/carAuctionFront">
              <Image
                src="/static/screenshots/car-auction/landing-page.png"
                alt=""
                width={500}
                height={500}
                className="object-contain mb-5"
              />
            </Link>
          </div>
        </li>
        <li>
          <div className="font-medium text-lg grid grid-cols-2 items-center gap-5">
            <div className="-translate-y-2">
              <Link href="/projects/motoEcomFront" className="font-bold">
                <div>
                  <p>Motorcycle E-Commerce</p>
                  <p>Mobile App</p>
                  <p>with React Native</p>
                </div>
              </Link>
              <ol className="list-decimal pl-5 space-y-4 mt-2 text-start">
                <li>
                  <Link href="/projects/motoEcomFront" className="text-lg">
                    Frontend only
                  </Link>
                </li>
                <li>
                  <Link href="/projects/motoEcomFull" className="text-lg">
                    {`Full Stack (MERN)`}
                  </Link>
                </li>
              </ol>
            </div>
            <Link href="/projects/motoEcomFront">
              <Image
                src="/static/screenshots/moto-ecom-full/1.png"
                alt=""
                width={200}
                height={200}
                className="object-contain mx-auto"
              />
            </Link>
          </div>
        </li>
      </ul>
    </ProjectWrapper>
  );
};
export default Projects;
