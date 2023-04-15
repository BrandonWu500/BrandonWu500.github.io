import ProjectWrapper from "@/components/ProjectWrapper";
import { projectsInfo } from "@/data/projectsIndex";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const enum Sorts {
  NEWEST,
  OLDEST,
}

const Projects = () => {
  const [sortType, setSortType] = useLocalStorage("sortProjects", Sorts.NEWEST);
  const [projectsList, setProjectsList] = useState(projectsInfo);

  const sortProjects = (sortIdx: Sorts) => {
    let newProjectsList = [...projectsList];
    switch (sortIdx) {
      case Sorts.NEWEST:
        newProjectsList.sort((a, b) => b.id - a.id);
        break;

      case Sorts.OLDEST:
        newProjectsList.sort((a, b) => a.id - b.id);
        break;

      default:
        break;
    }
    setProjectsList(newProjectsList);
    setSortType(sortIdx);
  };

  useEffect(() => {
    sortProjects(sortType);
  }, []);

  const handleSortChange = (e: any) => {
    const sortIdx = Number(e.target.value);
    sortProjects(sortIdx);
  };

  return (
    <ProjectWrapper>
      <div className="mb-12">
        <h2 className="text-center font-bold text-xl mb-4">PROJECTS</h2>
        <p className="text-center text-lg">
          Click on a project to learn more about it.
        </p>
        <div className="mx-auto my-5 flex justify-center items-center gap-5">
          <label className="text-center font-semibold" htmlFor="sort">
            Sort Projects By:
          </label>
          <select
            name="sort"
            id="sort"
            className="p-2 dark:bg-inherit"
            value={sortType}
            onChange={handleSortChange}
          >
            <option value={Sorts.NEWEST}>Newest</option>
            <option value={Sorts.OLDEST}>Oldest</option>
          </select>
        </div>
      </div>
      <ul className="min-h-screen space-y-12 text-center">
        {projectsList.map((project) => (
          <li key={project.id}>
            {!project?.sections && (
              <div className="font-semibold text-lg grid grid-cols-2 items-center gap-5">
                <div>
                  <Link href={project.link} className="font-bold">
                    {project.title.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </Link>
                </div>
                <Link href={project.link}>
                  <Image
                    src={project.img}
                    alt=""
                    width={500}
                    height={500}
                    className="object-contain mb-5"
                  />
                </Link>
              </div>
            )}
            {project?.sections && (
              <div className="font-medium text-lg grid grid-cols-2 items-center gap-5">
                <div className="-translate-y-2">
                  <Link href={project.link} className="font-bold">
                    {project.title.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </Link>
                  <ol className="list-decimal pl-5 space-y-4 mt-2 text-start">
                    {project.sections.map((section, idx) => (
                      <li key={idx}>
                        <Link href={section.link} className="text-lg">
                          {section.title}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </div>
                <Link href={project.link}>
                  {project?.mobile ? (
                    <Image
                      src={project.img}
                      alt=""
                      width={200}
                      height={200}
                      className="object-contain mx-auto"
                    />
                  ) : (
                    <Image
                      src={project.img}
                      alt=""
                      width={500}
                      height={500}
                      className="object-contain mb-5"
                    />
                  )}
                </Link>
              </div>
            )}
          </li>
        ))}
      </ul>
    </ProjectWrapper>
  );
};
export default Projects;
