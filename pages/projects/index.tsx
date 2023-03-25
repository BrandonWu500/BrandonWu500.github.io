import ProjectWrapper from '@/components/ProjectWrapper';
import Link from 'next/link';

const Projects = () => {
  return (
    <ProjectWrapper>
      <h2 className="text-center font-bold text-xl mb-8">PROJECTS</h2>
      <ol className="h-screen space-y-8 list-decimal pl-10">
        <li>
          <Link href="/projects/mernShop" className="font-semibold text-lg">
            MERN Stack Shopping App
          </Link>
        </li>
        <li>
          <Link
            href="/projects/adminDashFront"
            className="font-semibold text-lg"
          >
            Admin Dashboard
          </Link>
          <ol className="list-disc pl-5 space-y-4 mt-2">
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
        </li>
        <li>
          <Link
            href="/projects/foodDeliveryFront"
            className="font-semibold text-lg"
          >
            Food Delivery App with Next.js
          </Link>
          <ol className="list-disc pl-5 space-y-4 mt-2">
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
        </li>
        <li>
          <Link
            href="/projects/netflixCloneFront"
            className="font-semibold text-lg"
          >
            Netflix Clone Frontend with Next.js
          </Link>
        </li>
        <li>
          <Link
            href="/projects/carAuctionFront"
            className="font-semibold text-lg"
          >
            Car Auction Frontend with Three.js
          </Link>
        </li>
      </ol>
    </ProjectWrapper>
  );
};
export default Projects;
