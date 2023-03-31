import ProjectWrapper from '@/components/ProjectWrapper';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <ProjectWrapper>
      <div className="mb-12">
        <h2 className="text-center font-bold text-xl mb-4">PROJECTS</h2>
        <p className="text-center">
          Click on a project to learn more about it.
        </p>
      </div>
      <ul className="h-screen space-y-12 text-center">
        <li>
          <div className="font-semibold text-lg grid grid-cols-2 items-center gap-5">
            <div>
              <Link href="/projects/mernShop">
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
          <div className="font-semibold text-lg grid grid-cols-2 items-center gap-5">
            <div className="-translate-y-2">
              <Link href="/projects/adminDashFront">
                <p className="mb-4">Admin Dashboard</p>
              </Link>
              <ol className="list-decimal pl-5 space-y-4 mt-2 text-start">
                <li>
                  <Link
                    href="/projects/adminDashFront"
                    className="font-semibold text-lg"
                  >
                    Frontend only
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/adminDashFirebase"
                    className="font-semibold text-lg"
                  >
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
          <div className="font-semibold text-lg grid grid-cols-2 items-center gap-5">
            <div className="-translate-y-2">
              <Link href="/projects/foodDeliveryFront">
                <p>Food Delivery App</p> <p>with Next.js</p>
              </Link>
              <ol className="list-decimal pl-5 space-y-4 mt-2 text-start">
                <li>
                  <Link
                    href="/projects/foodDeliveryFront"
                    className="font-semibold text-lg"
                  >
                    Frontend only
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/foodDeliveryFullStack"
                    className="font-semibold text-lg"
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
            <Link href="/projects/netflixCloneFront">
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
            <Link href="/projects/carAuctionFront">
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
      </ul>
    </ProjectWrapper>
  );
};
export default Projects;
