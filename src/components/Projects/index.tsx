import { useNavigate } from "react-router-dom";
import { CardProject } from "../CardProject";
import projects from "../../data/projects.json";

export const Projects = () => {
  const navigate = useNavigate();
  const widthClient = document.documentElement.clientWidth;
  return (
    <section className="flex flex-col gap-y-8 w-3/4">
      <div className="flex justify-between">
        <div className="flex w-4/6">
          <h2 className="text-2xl">
            <span className="text-primary-purple">#</span>
            projetos
          </h2>
          <hr className="w-full ml-1 mt-4 border-primary-purple" />
        </div>
        <div className="flex w-2/6 justify-end">
          <a
            className="text-base text-end cursor-pointer"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/portfolio/projetos");
            }}
          >
            Ver tudo {"~~>"}
          </a>
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-row gap-y-4 justify-between">
        {projects
          .slice(0, widthClient >= 1800 ? 4 : 3)
          .map((project, index) => {
            return (
              <CardProject
                key={index}
                name={project.name}
                repository={project.repository}
                technologies={project.technologies}
                description={project.description}
                link_live={project.link_live}
                image={project.image}
              />
            );
          })}
      </div>
      <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral bg-transparent rounded-box lg:hidden">
        {projects.slice(0, 3).map((project, index) => {
          return (
            <div className="carousel-item">
              <CardProject
                key={index}
                name={project.name}
                repository={project.repository}
                technologies={project.technologies}
                description={project.description}
                link_live={project.link_live}
                image={project.image}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
