import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithRouter } from '../../test-utils';
import { projects } from '../../data/projects';
import ProjetosPage from '../ProjetosPage';

describe('ProjetosPage', () => {
  it('renderiza todos os projetos do acervo com link para o repositório', () => {
    renderWithRouter(<ProjetosPage />);

    projects.forEach((project) => {
      expect(screen.getByRole('heading', { name: project.name })).toBeInTheDocument();
    });

    const linksRepo = screen.getAllByRole('link', { name: /código/i });
    expect(linksRepo).toHaveLength(projects.length);
  });

  it('mostra o link de demo apenas para projetos que têm um deploy', () => {
    renderWithRouter(<ProjetosPage />);

    const comDemo = projects.filter((p) => p.live);
    const linksDemo = screen.getAllByRole('link', { name: /ver demo/i });
    expect(linksDemo).toHaveLength(comDemo.length);
  });
});
