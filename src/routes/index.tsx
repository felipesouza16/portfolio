import { Routes as RoutesDOM, Route } from "react-router-dom";
import App from "../App";
import { AboutMePage, ProjectsPage, ContactPage } from "../pages";

export const Routes = () => {
  return (
    <RoutesDOM>
      <Route path="/" element={<App />} />
      <Route path="/projetos" element={<ProjectsPage />} />
      <Route path="/sobre-mim" element={<AboutMePage />} />
      <Route path="/contato" element={<ContactPage />} />
    </RoutesDOM>
  );
};
