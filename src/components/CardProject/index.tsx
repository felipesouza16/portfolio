type CardProjectProps = {
  name: string;
  repository: string;
  technologies: string[];
  description: string;
  link_live: string;
  image: string;
};

export const CardProject = (card: CardProjectProps) => {
  return (
    <div className="lg:w-80 w-60 h-min border border-grey flex flex-col">
      <div className="h-48">
        <img src={card.image} className="h-full" />
      </div>
      <div className="h-auto border border-b-grey border-x-0">
        <div className="flex">
          <p className="text-base text-grey px-2">{card.technologies}</p>
        </div>
      </div>
      <div className="p-3">
        <div className="flex justify-end flex-col gap-y-4">
          <h1 className="text-xl">{card.name}</h1>
          <p className="text-base text-grey">{card.description}</p>
          <div className="flex justify-start gap-x-4">
            <button
              type="button"
              className="text-sm w-28 h-8 border border-primary-purple"
            >
              <a
                href={card.link_live}
                target="_blank"
                className="h-full w-full flex justify-center items-center"
              >
                Live {"<~>"}
              </a>
            </button>
            <button
              type="button"
              className="text-sm w-28 h-8 border border-grey"
            >
              <a
                href={card.repository}
                target="_blank"
                className="h-full w-full flex justify-center items-center"
              >
                Github {"<~>"}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
