import { ChildrenType } from './Layout';

const ProjectWrapper = ({ children }: ChildrenType) => {
  return (
    <section id="projects" className="dark:bg-slate-900 dark:text-gray-300">
      <div className="max-w-xl container mx-auto px-10 py-40">{children}</div>
    </section>
  );
};
export default ProjectWrapper;
