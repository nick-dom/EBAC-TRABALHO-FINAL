import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { renderWithRouter } from '../../test-utils';
import Header from '../Header';

describe('Header', () => {
  it('renderiza os quatro links de navegação principais', () => {
    // Arrange & Act
    renderWithRouter(<Header />);

    // Assert
    expect(screen.getByRole('link', { name: '/sobre' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '/projetos' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '/habilidades' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '/contato' })).toBeInTheDocument();
  });

  it('marca o link da rota atual como ativo', () => {
    renderWithRouter(<Header />, { route: '/projetos' });

    expect(screen.getByRole('link', { name: '/projetos' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: '/sobre' })).not.toHaveAttribute('aria-current');
  });

  it('abre e fecha o menu mobile ao clicar no botão', async () => {
    // O botão do menu só é visível via CSS abaixo de um breakpoint; o
    // jsdom não avalia media queries de viewport como um navegador
    // real, então ele fica corretamente "display: none" neste
    // ambiente — e, por spec, elementos ocultos não expõem nome
    // acessível. Por isso testamos a lógica pelo data-testid, não
    // pelo papel/nome (a visibilidade responsiva em si é coisa para
    // verificar visualmente num navegador de verdade).
    const user = userEvent.setup();
    renderWithRouter(<Header />);
    const botaoMenu = screen.getByTestId('menu-toggle');

    // Act
    await user.click(botaoMenu);

    // Assert
    expect(screen.getByRole('navigation', { name: /navegação mobile/i })).toBeInTheDocument();
    expect(botaoMenu).toHaveAttribute('aria-label', 'Fechar menu');

    // Act — fecha de novo
    await user.click(botaoMenu);

    // Assert
    expect(screen.queryByRole('navigation', { name: /navegação mobile/i })).not.toBeInTheDocument();
  });
});
