import { useRouter } from 'next/router';
import { ChildrenType } from './Layout';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProjectWrapper = ({ children }: ChildrenType) => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <section id="projects" className="dark:bg-slate-900 dark:text-gray-300">
      <div className="max-w-xl container mx-auto px-10 py-40">
        {pathname !== '/' && (
          <button
            onClick={router.back}
            className="capitalize bg-slate-800 text-white p-5 mt-10 mx-auto rounded hover:bg-slate-700 fixed top-8 lg:top-24 left-8 lg:left-48 xl:left-1/4 z-10 lg:-translate-x-10"
          >
            <ArrowBackIcon />
          </button>
        )}
        {children}
      </div>
    </section>
  );
};
export default ProjectWrapper;
