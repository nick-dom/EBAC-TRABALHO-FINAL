import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithRouter } from '../../test-utils';
import { profile } from '../../data/profile';
import SobrePage from '../SobrePage';

describe('SobrePage', () => {
  it('exibe o nome, a bio e os canais de contato', () => {
    renderWithRouter(<SobrePage />);

    expect(screen.getByRole('heading', { name: /sobre mim/i })).toBeInTheDocument();
    expect(screen.getByText(profile.bio[0])).toBeInTheDocument();
    expect(screen.getByRole('link', { name: new RegExp(profile.email) })).toBeInTheDocument();
  });

  it('lista todas as áreas de foco', () => {
    renderWithRouter(<SobrePage />);

    profile.focusAreas.forEach((area) => {
      expect(screen.getByText(area)).toBeInTheDocument();
    });
  });
});
