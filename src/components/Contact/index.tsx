import { Email } from "../../assets/Email";
import { LinkedIn } from "../../assets/LinkedIn";

export const Contact = () => {
  return (
    <div className="flex flex-col w-3/4 gap-y-8">
      <div className="flex">
        <h2 className="text-2xl">
          <span className="text-primary-purple">#</span>
          contato
        </h2>
        <hr className="w-32 ml-1 mt-4 border-primary-purple" />
      </div>
      <div className="flex lg:flex-row lg:justify-between flex-col gap-y-6">
        <div className="flex lg:w-2/4 justify-start">
          <p className="text-grey font-medium">
            Atualmente trabalho como desenvolvedor na Havan, mas se tiver
            qualquer questão ou dúvida não hesite em me contatar, responderei
            assim que possível!
          </p>
        </div>
        <div className="flex lg:w-2/4 lg:justify-end justify-start">
          <div className="flex flex-col gap-y-2 w-52 h-36 border border-grey">
            <p className="text-white ml-3 mt-2 mb-4 font-semibold text-base">
              Mande mensagem aqui
            </p>
            <div className="flex ml-2 flex-row w-full gap-x-1">
              <LinkedIn height="32" width="32" />
              <div className="flex text-grey font-normal text-xs h-full items-center">
                <a
                  href="https://www.linkedin.com/in/felipe-souza-057576200/"
                  target="_blank"
                >
                  Felipe Souza
                </a>
              </div>
            </div>
            <div className="flex ml-2 flex-row w-full gap-x-1">
              <Email height="32" width="32" />
              <div className="flex text-grey font-normal text-xs h-full items-center">
                <a href="mailto:fesouza2345@gmail.com" target="_blank">
                  fesouza2345@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
