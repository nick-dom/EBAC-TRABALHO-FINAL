import { act, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderWithRouter } from '../../test-utils';
import { profile } from '../../data/profile';
import HubPage from '../HubPage';

describe('HubPage', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('mostra a barra de carregamento antes de revelar o menu', () => {
    renderWithRouter(<HubPage />);

    expect(screen.getByRole('status')).toHaveTextContent(/carregando/i);
    expect(screen.queryByText(/selecione uma seção/i)).not.toBeInTheDocument();
  });

  it('revela o menu com os 4 níveis depois do carregamento', () => {
    renderWithRouter(<HubPage />);

    // Avança tempo suficiente para a barra de progresso chegar a 100%,
    // não importa quantos incrementos aleatórios isso leve.
    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(screen.getByRole('heading', { name: profile.name })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sobre mim/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projetos/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /habilidades/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contato/i })).toBeInTheDocument();
  });
});
