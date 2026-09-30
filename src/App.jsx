import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ContatoPage from './pages/ContatoPage';
import HabilidadesPage from './pages/HabilidadesPage';
import HubPage from './pages/HubPage';
import NotFoundPage from './pages/NotFoundPage';
import ProjetosPage from './pages/ProjetosPage';
import SobrePage from './pages/SobrePage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HubPage />} />
        <Route path="sobre" element={<SobrePage />} />
        <Route path="projetos" element={<ProjetosPage />} />
        <Route path="habilidades" element={<HabilidadesPage />} />
        <Route path="contato" element={<ContatoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
