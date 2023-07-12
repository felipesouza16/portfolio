import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Curiosities } from "./Curiosities";
import { Education } from "./Education";
import { SkillsAboutMePage } from "./SkillsAboutMePage";
import image from "/image-2.png";

export const AboutMePage = () => {
  return (
    <div className="flex flex-col items-center gap-y-20">
      <Header />
      <div className="flex flex-col w-3/4 gap-y-16 mt-28">
        <div className="flex flex-col gap-y-4">
          <p className="font-semibold text-3xl">
            <span className="text-primary-purple">/</span>
            sobre-mim
          </p>
          <p className="font-normal text-white text-base">Quem sou eu?</p>
        </div>
        <div className="flex lg:flex-row gap-y-6 flex-col-reverse w-full lg:justify-between">
          <div className="flex flex-col items-start lg:w-3/5 gap-y-8 text-base font-normal text-grey">
            <p>Olá, sou o Felipe!</p>
            <p>
              Sou desenvolvedor front-end e atualmente moro em Florianópolis,
              Santa Catarina. Eu posso desenvolver sites responsivos do zero e
              transformá-los em experiências amigavéis e de fácil utilização
              para o usuário. Também atuo na sustentação de aplicações,
              resolvendo erros, e trabalhando para a melhor performance da
              mesma.
            </p>
            <p>
              Transformar minha criatividade e conhecimento em sites tem sido
              minha paixão há mais dois anos. Eu sempre me esforço para aprender
              e estar por dentro das novidades sobre novas tecnologias e
              frameworks.
            </p>
          </div>
          <div className="flex flex-col lg:w-80 lg:h-1/2 items-center justify-center">
            <img src={image} alt="image-2" className="max-lg:max-h-[28rem]" />
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          <p className="font-semibold text-3xl">
            <span className="text-primary-purple">#</span>
            educação
          </p>
          <Education />
        </div>
        <div className="flex flex-col gap-y-8">
          <p className="font-semibold text-3xl">
            <span className="text-primary-purple">#</span>
            skills
          </p>
          <SkillsAboutMePage />
        </div>
        <div className="flex flex-col gap-y-8">
          <p className="font-semibold text-3xl">
            <span className="text-primary-purple">#</span>
            curiosidades
          </p>
          <Curiosities />
        </div>
      </div>
      <Footer />
    </div>
  );
};
