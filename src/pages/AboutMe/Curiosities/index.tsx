import decorations2 from "/decorations-2.png";

export const Curiosities = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between">
      <div className="flex lg:gap-x-2 justify-start max-lg:flex-col lg:flex-wrap gap-y-2 lg:w-2/3 h-min">
        <div className="flex flex-col border py-1 items-center justify-center lg:max-h-8 border-grey w-fit">
          <p className="font-normal text-grey px-2 text-center text-sm">
            Eu gosto mais do verão do que do inverno.
          </p>
        </div>
        <div className="flex flex-col border py-1 items-center justify-center lg:max-h-8 border-grey w-fit">
          <p className="font-normal text-grey px-2 text-center text-sm">
            Gosto de praias.
          </p>
        </div>
        <div className="flex flex-col border py-1 items-center justify-center lg:max-h-8 border-grey w-fit">
          <p className="font-normal text-grey px-2 text-center text-sm">
            Gosto de jogar no computador.
          </p>
        </div>
        <div className="flex flex-col border py-1 items-center justify-center lg:max-h-8 border-grey w-fit">
          <p className="font-normal text-grey px-2 text-center text-sm">
            Minha série preferida é Game of Thrones.
          </p>
        </div>
        <div className="flex flex-col border py-1 items-center justify-center lg:max-h-8 border-grey w-fit">
          <p className="font-normal text-grey px-2 text-center text-sm">
            Meu filme preferido é Jogos Vorazes.
          </p>
        </div>
        <div className="flex flex-col border py-1 items-center justify-center lg:max-h-8 border-grey w-fit">
          <p className="font-normal text-grey px-2 text-center text-sm">
            Minha comida preferida é hambúrguer.
          </p>
        </div>
        <div className="flex flex-col border py-1 items-center justify-center lg:max-h-8 border-grey w-fit">
          <p className="font-normal text-grey px-2 text-center text-sm">
            Eu costumava andar de skate.
          </p>
        </div>
        <div className="flex flex-col border py-1 items-center justify-center lg:max-h-8 border-grey w-fit">
          <p className="font-normal text-grey px-2 text-center text-sm">
            Gosto de me exercitar.
          </p>
        </div>
        <div className="flex flex-col border py-1 items-center justify-center lg:max-h-8 border-grey w-fit">
          <p className="font-normal text-grey px-2 text-center text-sm">
            Já morei em 4 cidades.
          </p>
        </div>
      </div>
      <div className="lg:flex lg:w-1/3 hidden lg:h-min">
        <img src={decorations2} className="h-full w-full" />
      </div>
    </div>
  );
};
