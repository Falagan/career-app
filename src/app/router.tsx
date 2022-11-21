import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./layout/layout'));
const Projects = lazy(() => import('./components/projects/projects'));
const ProgrammingLanguages = lazy(() => import('./components/programming-languages/programming-languages'));
const Tooling = lazy(() => import('./components/tooling/tooling'));
const Languages = lazy(() => import('./components/languages/languages'));
const Certifications = lazy(() => import('./components/certifications/certifications'));
const Contact = lazy(() => import('./components/contact/contact'));

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="projects" element={<Projects />} />
          <Route path="programming" element={<ProgrammingLanguages />} />
          <Route path="tooling" element={<Tooling />} />
          <Route path="languages" element={<Languages />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
