import { CardProject } from "../../components/CardProject";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import projects from "../../data/projects.json";

export const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-center gap-y-20">
      <Header />
      <div className="flex flex-col w-3/4 mt-28 gap-y-16">
        <div className="flex flex-col gap-y-4">
          <p className="font-semibold text-3xl">
            <span className="text-primary-purple">/</span>
            projetos
          </p>
          <p className="font-normal text-white text-base">
            Lista com meus projetos.
          </p>
        </div>
        <div className="flex flex-col gap-y-6">
          <p className="font-semibold text-3xl">
            <span className="text-primary-purple">#</span>
            apps-completos
          </p>
          <div className="hidden lg:flex lg:flex-row gap-y-4 w-full h-full justify-start gap-x-3 flex-wrap">
            {projects.map((project) => {
              return (
                <CardProject
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
            {projects.map((project) => {
              return (
                <div className="carousel-item">
                  <CardProject
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
        </div>
      </div>
      <Footer />
    </div>
  );
};
