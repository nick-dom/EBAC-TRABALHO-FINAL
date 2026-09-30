import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from '../App';

function renderApp(route) {
  return render(
    <MemoryRouter
      initialEntries={[route]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </MemoryRouter>
  );
}

describe('App (rotas)', () => {
  it('renderiza a página Sobre em /sobre', () => {
    renderApp('/sobre');
    expect(screen.getByRole('heading', { name: /sobre mim/i })).toBeInTheDocument();
  });

  it('renderiza a página Projetos em /projetos', () => {
    renderApp('/projetos');
    expect(screen.getByRole('heading', { name: /^projetos$/i })).toBeInTheDocument();
  });

  it('renderiza a página Habilidades em /habilidades', () => {
    renderApp('/habilidades');
    expect(screen.getByRole('heading', { name: /habilidades/i })).toBeInTheDocument();
  });

  it('renderiza a página Contato em /contato', () => {
    renderApp('/contato');
    expect(screen.getByRole('heading', { name: /vamos conversar/i })).toBeInTheDocument();
  });

  it('renderiza a página 404 para uma rota desconhecida', () => {
    renderApp('/rota-que-nao-existe');
    expect(screen.getByRole('heading', { name: /área desconhecida/i })).toBeInTheDocument();
  });
});
