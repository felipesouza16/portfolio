import decorations1 from "/decorations-1.png";

export const Education = () => {
  return (
    <div className="flex flex-row justify-end ">
      <div className="lg:flex hidden w-1/4">
        <img src={decorations1} className="h-full w-full" />
      </div>
      <div className="lg:flex lg:flex-row hidden justify-end gap-x-4 w-3/4">
        <div className="flex">
          <div className="w-44 border border-grey max-h-28">
            <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
              <p className="text-xs font-semibold px-2 py-1">
                ETEC Lauro Gomes, SP
              </p>
            </div>
            <div className="flex p-2">
              <p className="text-xs text-grey">
                Ensino médio integrado ao técnico de mecatrônica. <br /> 2018 -
                2020
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="w-44 border border-grey max-h-28">
            <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
              <p className="text-xs font-semibold px-2 py-1">
                Senai, Brusque-SC
              </p>
            </div>
            <div className="flex p-2">
              <p className="text-xs text-grey">
                Técnico em desenvolvimento de sistemas.
                <br /> 2021 - 2022
              </p>
            </div>
          </div>
          <div className="w-44 border border-grey max-h-24">
            <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
              <p className="text-xs font-semibold px-2 py-1">
                ProWay, Brusque-SC
              </p>
            </div>
            <div className="flex p-2">
              <p className="text-xs text-grey">
                Desenvolvimento C#.
                <br /> 2022 - 360 horas
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="w-44 border border-grey max-h-28">
            <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
              <p className="text-xs font-semibold px-2 py-1">Rocketseat</p>
            </div>
            <div className="flex p-2">
              <p className="text-xs text-grey">
                Desenvolvimento React. <br /> 2022 - 100 horas
              </p>
            </div>
          </div>
          <div className="w-44 border border-grey max-h-28">
            <div className="flex border border-b-grey border-x-0 border-t-0 h-10 items-center">
              <p className="text-xs font-semibold px-2 py-1">
                Estácio, Florianópolis-SC
              </p>
            </div>
            <div className="flex p-2">
              <p className="text-xs text-grey">
                Ciência da computação. <br /> 2023 - 2027
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral bg-transparent rounded-box xl:hidden">
        <div className="carousel-item">
          <div className="w-44 border border-grey max-h-28">
            <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
              <p className="text-xs font-semibold px-2 py-1">
                ETEC Lauro Gomes, SP
              </p>
            </div>
            <div className="flex p-2">
              <p className="text-xs text-grey">
                Ensino médio integrado ao técnico de mecatrônica. <br /> 2018 -
                2020
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="w-44 border border-grey max-h-28">
            <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
              <p className="text-xs font-semibold px-2 py-1">
                Senai, Brusque-SC
              </p>
            </div>
            <div className="flex p-2">
              <p className="text-xs text-grey">
                Técnico em desenvolvimento de sistemas.
                <br /> 2021 - 2022
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="w-44 border border-grey max-h-24">
            <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
              <p className="text-xs font-semibold px-2 py-1">
                ProWay, Brusque-SC
              </p>
            </div>
            <div className="flex p-2">
              <p className="text-xs text-grey">
                Desenvolvimento C#.
                <br /> 2022 - 360 horas
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="w-44 border border-grey max-h-24">
            <div className="flex border border-b-grey border-x-0 border-t-0 h-7 items-center">
              <p className="text-xs font-semibold px-2 py-1">Rocketseat</p>
            </div>
            <div className="flex p-2">
              <p className="text-xs text-grey">
                Desenvolvimento React. <br /> 2022 - 100 horas
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="w-44 border border-grey max-h-28">
            <div className="flex border border-b-grey border-x-0 border-t-0 h-10 items-center">
              <p className="text-xs font-semibold px-2 py-1">
                Estácio, Florianópolis-SC
              </p>
            </div>
            <div className="flex p-2">
              <p className="text-xs text-grey">
                Ciência da computação. <br /> 2023 - 2027
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
