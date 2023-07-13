import { Routes as RoutesDOM, Route } from "react-router-dom";
import App from "../App";
import { AboutMePage, ProjectsPage, ContactPage } from "../pages";

export const Routes = () => {
  return (
    <RoutesDOM>
      <Route path="/portfolio" element={<App />} />
      <Route path="/portfolio/projetos" element={<ProjectsPage />} />
      <Route path="/portfolio/sobre-mim" element={<AboutMePage />} />
      <Route path="/portfolio/contato" element={<ContactPage />} />
    </RoutesDOM>
  );
};
