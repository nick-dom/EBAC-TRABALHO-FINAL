import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

// Como o roteamento usa HashRouter (URLs tipo #/projetos), um link
// nativo href="#conteudo" seria interpretado como navegação de rota,
// não como âncora de página. Por isso o foco é movido via JS.
function pularParaConteudo(evento) {
  evento.preventDefault();
  document.getElementById('conteudo')?.focus();
}

export default function Layout() {
  const { pathname } = useLocation();

  // Uma SPA não rola para o topo sozinha ao trocar de rota (diferente
  // de navegação tradicional entre páginas). Sem isso, ir de uma
  // página longa para outra deixaria a pessoa "no meio" da tela nova.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a href="#conteudo" onClick={pularParaConteudo} className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
