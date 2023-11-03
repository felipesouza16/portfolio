import { useNavigate } from "react-router-dom";
import { TypingEffect } from "../TypingEffect";
import image from "/image-1.png";

export const Introduction = () => {
  const navigate = useNavigate();
  return (
    <section className="hero h-[90vh] w-3/4 mt-16">
      <div className="hero-content gap-x-40 flex-col lg:flex-row-reverse">
        <div className="flex flex-col items-center justify-center">
          <img
            src={image}
            className="lg:w-96 lg:h-1/2 w-full h-full max-h-[28rem]"
            alt="image-1"
          />
        </div>
        <div className="h-full lg:w-1/2">
          <div className="h-6">
            <TypingEffect speed={150} text="Hello World!" />
          </div>
          <h1 className="text-3xl font-bold">Olá, sou o Felipe Souza...</h1>
          <p className="py-6">
            Sou um <span className="text-primary-purple">Web Developer</span>{" "}
            que ama a programação, e busca cada vez mais, formas de ser melhor a
            cada linha de código.
          </p>
          <a
            className="border cursor-pointer border-primary-purple w-36 h-9 py-2 px-3"
            onClick={() => {
              navigate("/portfolio/contato");
            }}
          >
            fale comigo!
          </a>
        </div>
      </div>
    </section>
  );
};
