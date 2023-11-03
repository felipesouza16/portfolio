import decorations from "/decorations-1.png";

export const Skills = () => {
  return (
    <section className="flex flex-col w-3/4 gap-y-8">
      <div className="flex lg:w-2/5 w-full">
        <h2 className="text-2xl">
          <span className="text-primary-purple">#</span>
          skills
        </h2>
        <hr className="w-full ml-1 mt-4 border-primary-purple" />
      </div>
      <div className="flex lg:flex-row lg:h-72 flex-col">
        <div className="lg:flex w-1/3 hidden">
          <img src={decorations} className="w-full h-full" />
        </div>
        <div className="flex flex-row justify-end w-2/3 gap-x-4 max-lg:hidden">
          <div className="flex">
            <div className="w-44 border border-grey h-24">
              <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
                <p className="text-base font-semibold px-2 py-1">Linguagens</p>
              </div>
              <div className="flex p-2">
                <p className="text-base text-grey">TypeScript JavaScript C#</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="w-44 border border-grey h-24">
              <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
                <p className="text-base font-semibold px-2 py-1">Databases</p>
              </div>
              <div className="flex p-2">
                <p className="text-base text-grey">
                  SQLServer Mongo PostgreSQL
                </p>
              </div>
            </div>
            <div className="w-44 border border-grey max-h-24">
              <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
                <p className="text-base font-semibold px-2 py-1">Frameworks</p>
              </div>
              <div className="flex p-2">
                <p className="text-base text-grey">
                  React Express.js ReactNative
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="w-44 border border-grey max-h-28">
              <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
                <p className="text-base font-semibold px-2 py-1">Ferramentas</p>
              </div>
              <div className="flex p-2">
                <p className="text-base text-grey">
                  VSCode Git VisualStudio Figma
                </p>
              </div>
            </div>
            <div className="w-44 border border-grey max-h-24">
              <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
                <p className="text-base font-semibold px-2 py-1">Outros</p>
              </div>
              <div className="flex p-2">
                <p className="text-base text-grey">
                  HTML CSS SCSS REST GRAPHQL{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral bg-transparent rounded-box lg:hidden">
          <div className="carousel-item">
            <div className="w-44 border border-grey h-24">
              <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
                <p className="text-base font-semibold px-2 py-1">Linguagens</p>
              </div>
              <div className="flex p-2">
                <p className="text-base text-grey">TypeScript JavaScript C#</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="w-44 border border-grey h-24">
              <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
                <p className="text-base font-semibold px-2 py-1">Databases</p>
              </div>
              <div className="flex p-2">
                <p className="text-base text-grey">
                  SQLServer Mongo PostgreSQL
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="w-44 border border-grey max-h-24">
              <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
                <p className="text-base font-semibold px-2 py-1">Frameworks</p>
              </div>
              <div className="flex p-2">
                <p className="text-base text-grey">
                  React Express.js ReactNative
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="w-44 border border-grey max-h-28">
              <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
                <p className="text-base font-semibold px-2 py-1">Ferramentas</p>
              </div>
              <div className="flex p-2">
                <p className="text-base text-grey">
                  VSCode Git VisualStudio Figma
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="w-44 border border-grey max-h-24">
              <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
                <p className="text-base font-semibold px-2 py-1">Outros</p>
              </div>
              <div className="flex p-2">
                <p className="text-base text-grey">
                  HTML CSS SCSS REST GRAPHQL{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
