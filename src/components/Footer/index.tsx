import { Email } from "../../assets/Email";
import { Github } from "../../assets/Github";
import { LinkedIn } from "../../assets/LinkedIn";

export const Footer = () => {
  return (
    <footer className="footer flex flex-col lg:flex-row lg:justify-around p-10 bg-transparent border-t text-neutral-content">
      <div className="flex flex-col max-lg:w-full">
        <p className="text-base text-white font-bold cursor-pointer">
          felipeSouza.dev
        </p>
        <p className="text-base text-white font-normal">Desenvolvedor Web.</p>
      </div>
      <div className="flex flex-col max-lg:w-full max-lg:items-end">
        <p className="text-xl text-white font-normal cursor-pointer">Media</p>
        <div className="flex flex-row">
          <a
            href="https://www.linkedin.com/in/felipe-souza-057576200/"
            target="_blank"
          >
            <LinkedIn height="32" width="32" />
          </a>
          <a href="https://github.com/felipesouza16" target="_blank">
            <Github height="32" width="32" />
          </a>
          <a href="mailto:fesouza2345@gmail.com" target="_blank">
            <Email height="32" width="32" />
          </a>
        </div>
      </div>
    </footer>
  );
};
