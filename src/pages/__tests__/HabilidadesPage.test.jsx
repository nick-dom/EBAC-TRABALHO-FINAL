import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithRouter } from '../../test-utils';
import { skillGroups } from '../../data/skills';
import HabilidadesPage from '../HabilidadesPage';

describe('HabilidadesPage', () => {
  it('renderiza todos os grupos de habilidades', () => {
    renderWithRouter(<HabilidadesPage />);

    skillGroups.forEach((group) => {
      expect(screen.getByRole('heading', { name: group.title })).toBeInTheDocument();
    });
  });

  it('renderiza os itens de um grupo sem ambiguidade com a lista de linguagens', () => {
    renderWithRouter(<HabilidadesPage />);

    // Usamos o grupo de segurança de propósito: seus itens não se
    // repetem na lista de linguagens (diferente do grupo de
    // front-end, que compartilha "JavaScript"/"TypeScript" com ela e
    // causaria "elemento duplicado" no teste).
    const seguranca = skillGroups.find((g) => g.id === 'seguranca');
    seguranca.items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
