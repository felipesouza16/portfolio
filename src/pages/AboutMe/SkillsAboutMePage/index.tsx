export const SkillsAboutMePage = () => {
  return (
    <div>
      <div className="hidden xl:flex xl:flex-row justify-around">
        <div className="w-44 border border-grey h-24">
          <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
            <p className="text-base font-semibold px-2 py-1">Linguagens</p>
          </div>
          <div className="flex p-2">
            <p className="text-base text-grey">TypeScript JavaScript C#</p>
          </div>
        </div>
        <div className="w-44 border border-grey h-24">
          <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
            <p className="text-base font-semibold px-2 py-1">Databases</p>
          </div>
          <div className="flex p-2">
            <p className="text-base text-grey">SQLServer Mongo PostgreSQL</p>
          </div>
        </div>
        <div className="w-44 border border-grey max-h-24">
          <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
            <p className="text-base font-semibold px-2 py-1">Frameworks</p>
          </div>
          <div className="flex p-2">
            <p className="text-base text-grey">React Express.js ReactNative</p>
          </div>
        </div>
        <div className="w-44 border border-grey max-h-28">
          <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
            <p className="text-base font-semibold px-2 py-1">Ferramentas</p>
          </div>
          <div className="flex p-2">
            <p className="text-base text-grey">VSCode Git VisualStudio Figma</p>
          </div>
        </div>
        <div className="w-44 border border-grey max-h-24">
          <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
            <p className="text-base font-semibold px-2 py-1">Outros</p>
          </div>
          <div className="flex p-2">
            <p className="text-base text-grey">HTML CSS SCSS REST GRAPHQL </p>
          </div>
        </div>
      </div>
      <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral bg-transparent rounded-box xl:hidden">
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
              <p className="text-base text-grey">SQLServer Mongo PostgreSQL</p>
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
              <p className="text-base text-grey">HTML CSS SCSS REST GRAPHQL </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
