import { useNavigate } from "react-router-dom";
import { Github } from "../../assets/Github";
import { LinkedIn } from "../../assets/LinkedIn";
import { List } from "../../assets/List";

export const Header = () => {
  const navigate = useNavigate();
  const handleRedirect = (url: string) => {
    window.scrollTo(0, 0);
    navigate(url);
  };

  return (
    <header className="flex h-16 z-50 bg-background fixed w-3/4">
      <nav className="flex justify-between w-full">
        <div className="flex flex-col justify-end">
          <a
            className="text-base font-bold cursor-pointer"
            onClick={() => handleRedirect("/portfolio")}
          >
            felipeSouza.dev
          </a>
        </div>
        <div className="lg:flex lg:flex-col lg:justify-end lg:w-96 text-grey max-lg:hidden">
          <div className="flex justify-between">
            <a
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white duration-300"
              onClick={() => handleRedirect("/portfolio/projetos")}
            >
              <span className="text-primary-purple">#</span>projetos
            </a>
            <a
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white duration-300"
              onClick={() => handleRedirect("/portfolio/sobre-mim")}
            >
              <span className="text-primary-purple">#</span>sobre-mim
            </a>
            <a
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white duration-300"
              onClick={() => handleRedirect("/portfolio/contato")}
            >
              <span className="text-primary-purple">#</span>
              contato
            </a>
            <div className="dropdown dropdown-hover">
              <p
                tabIndex={0}
                className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white duration-300"
              >
                <span className="text-primary-purple">#</span>social
              </p>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-20"
              >
                <li>
                  <a
                    href="https://github.com/felipesouza16"
                    target="_blank"
                    className="p-0 m-0 w-16 h-16"
                  >
                    <Github height="64" width="64" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/felipe-souza-057576200/"
                    target="_blank"
                    className="p-0 m-0 w-16 h-16"
                  >
                    <LinkedIn height="64" width="64" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-lg:flex max-lg:flex-col max-lg:justify-end lg:hidden">
          <div className="dropdown dropdown-hover dropdown-end">
            <label tabIndex={0}>
              <List />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44"
            >
              <li>
                <a
                  className="cursor-pointer"
                  onClick={() => handleRedirect("/portfolio/projetos")}
                >
                  <span className="text-primary-purple">#</span>projetos
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer"
                  onClick={() => handleRedirect("/portfolio/sobre-mim")}
                >
                  <span className="text-primary-purple">#</span>sobre-mim
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer"
                  onClick={() => handleRedirect("/portfolio/contato")}
                >
                  <span className="text-primary-purple">#</span>contato
                </a>
              </li>
              <li className="flex flex-row justify-around w-full">
                <a
                  href="https://github.com/felipesouza16"
                  target="_blank"
                  className="p-0 m-0 w-16 h-16 "
                >
                  <Github height="64" width="64" />
                </a>
                <a
                  href="https://www.linkedin.com/in/felipe-souza-057576200/"
                  target="_blank"
                  className="p-0 m-0 w-16 h-16"
                >
                  <LinkedIn height="64" width="64" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
