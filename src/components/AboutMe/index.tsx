import { useNavigate } from "react-router-dom";
import image from "/image-2.png";

export const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-3/4 gap-y-8">
      <div className="flex">
        <h2 className="text-2xl">
          <span className="text-primary-purple">#</span>
          sobre-mim
        </h2>
        <hr className="lg:w-80 w-36 ml-1 mt-4 border-primary-purple" />
      </div>
      <div className="flex lg:flex-row gap-y-6 flex-col-reverse w-full lg:justify-around">
        <div className="flex flex-col items-start  lg:w-3/5 gap-y-6 text-base font-normal text-grey">
          <p>Olá, sou o Felipe!</p>
          <p>
            Sou desenvolvedor front-end e atualmente moro em Florianópolis,
            Santa Catarina. Eu posso desenvolver sites responsivos do zero e
            transformá-los em experiências amigavéis e de fácil utilização para
            o usuário. Também atuo na sustentação de aplicações, resolvendo
            erros, e trabalhando para a melhor performance da mesma.
          </p>
          <p>
            Transformar minha criatividade e conhecimento em sites tem sido
            minha paixão há mais dois anos. Eu sempre me esforço para aprender e
            estar por dentro das novidades sobre novas tecnologias e frameworks.
          </p>
          <button
            type="button"
            className="text-sm font-medium w-36 h-9 border text-white border-primary-purple"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/sobre-mim");
            }}
          >
            Leia mais {"->"}
          </button>
        </div>
        <div className="flex flex-col lg:w-80 lg:h-1/2 items-center justify-center">
          <img src={image} alt="image-2" className="max-lg:max-h-[28rem]" />
        </div>
      </div>
    </div>
  );
};
