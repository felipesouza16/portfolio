import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Introduction } from "./components/Introduction";

export const App = () => {
  return (
    <main className="flex flex-col max-lg:gap-y-8 gap-y-20 items-center">
      <Header />
      <Introduction />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
