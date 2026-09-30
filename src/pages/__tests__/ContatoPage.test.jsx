import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithRouter } from '../../test-utils';
import { profile } from '../../data/profile';
import ContatoPage from '../ContatoPage';

describe('ContatoPage', () => {
  it('tem um link de WhatsApp com o número correto', () => {
    renderWithRouter(<ContatoPage />);

    const link = screen.getByRole('link', { name: /whatsapp/i });
    expect(link).toHaveAttribute('href', `https://wa.me/${profile.whatsapp}`);
  });

  it('tem um link de e-mail com o endereço correto', () => {
    renderWithRouter(<ContatoPage />);

    const link = screen.getByRole('link', { name: new RegExp(profile.email) });
    expect(link).toHaveAttribute('href', `mailto:${profile.email}`);
  });

  it('renderiza o formulário de contato', () => {
    renderWithRouter(<ContatoPage />);

    expect(screen.getByRole('button', { name: /enviar mensagem/i })).toBeInTheDocument();
  });
});
