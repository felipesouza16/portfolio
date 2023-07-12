import { useNavigate } from "react-router-dom";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { TypingEffect } from "./components/TypingEffect";
import image from "/image-1.png";

export const App = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col max-lg:gap-y-8 gap-y-20 items-center">
      <Header />
      <div className="hero h-[90vh] w-3/4 mt-16">
        <div className="hero-content gap-x-40 flex-col lg:flex-row-reverse">
          <div className="flex flex-col items-center justify-center">
            <img
              src={image}
              className="lg:w-96 lg:h-1/2 w-full h-full max-h-[28rem]"
              alt="image-1"
            />
          </div>
          <div className="h-full">
            <div className="h-6">
              <TypingEffect speed={150} text="Hello World!" />
            </div>
            <h1 className="text-3xl font-bold">Olá, sou o Felipe Souza...</h1>
            <p className="py-6">
              Sou{" "}
              <span className="text-primary-purple">
                desenvolvedor front-end
              </span>{" "}
              e <span className="text-primary-purple">back-end</span>.
            </p>
            <button
              className="border border-primary-purple w-36 h-9"
              onClick={() => {
                navigate("/contato");
              }}
            >
              fale comigo!
            </button>
          </div>
        </div>
      </div>
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
