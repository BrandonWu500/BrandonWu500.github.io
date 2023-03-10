import ProjectWrapper from '@/components/ProjectWrapper';

const projects = () => {
  return (
    <ProjectWrapper>
      <h2 className="text-center font-bold text-xl mb-4">PROJECTS</h2>
      <ol className="h-screen space-y-8 list-decimal">
        <li>
          <a href="/projects/mernShop" className="font-semibold text-lg">
            MERN Shopping App
          </a>
        </li>
        <li>
          <a href="/projects/adminDashFront" className="font-semibold text-lg">
            Admin Dashboard
          </a>
          <ol className="list-disc pl-5 space-y-4 mt-2">
            <li>
              <a
                href="/projects/adminDashFront"
                className="font-semibold text-lg"
              >
                Frontend only
              </a>
            </li>
            <li>
              <a
                href="/projects/adminDashFirebase"
                className="font-semibold text-lg"
              >
                Frontend with Firebase
              </a>
            </li>
          </ol>
        </li>
        <li>
          <a
            href="/projects/foodDeliveryFront"
            className="font-semibold text-lg"
          >
            Food Delivery Frontend with Next.js
          </a>
        </li>
        <li>
          <a
            href="/projects/netflixCloneFront"
            className="font-semibold text-lg"
          >
            Netflix Clone Frontend with Next.js
          </a>
        </li>
      </ol>
    </ProjectWrapper>
  );
};
export default projects;
