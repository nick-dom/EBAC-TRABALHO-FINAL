import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  beforeEach(() => {
    // jsdom não implementa navegação de verdade; isso evita que o
    // teste falhe ao tentarmos redirecionar para um link mailto:.
    delete window.location;
    window.location = { href: '' };
  });

  it('mostra mensagens de erro ao enviar o formulário vazio', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<ContactForm />);

    // Act
    await user.click(screen.getByRole('button', { name: /enviar mensagem/i }));

    // Assert
    expect(await screen.findByText(/digite seu nome completo/i)).toBeInTheDocument();
    expect(screen.getByText(/digite um e-mail para retorno/i)).toBeInTheDocument();
    expect(screen.getByText(/pelo menos 10 caracteres/i)).toBeInTheDocument();
  });

  it('limpa o erro do campo assim que a pessoa começa a corrigi-lo', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole('button', { name: /enviar mensagem/i }));
    expect(await screen.findByText(/digite seu nome completo/i)).toBeInTheDocument();

    await user.type(screen.getByLabelText(/^nome$/i), 'Ana');
    expect(screen.queryByText(/digite seu nome completo/i)).not.toBeInTheDocument();
  });

  it('envia com sucesso quando todos os campos são válidos', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/^nome$/i), 'Ana Silva');
    await user.type(screen.getByLabelText(/seu e-mail/i), 'ana@exemplo.com');
    await user.type(screen.getByLabelText(/mensagem/i), 'Olá, gostaria de conversar!');

    fireEvent.click(screen.getByRole('button', { name: /enviar mensagem/i }));

    expect(await screen.findByRole('status')).toHaveTextContent(/abrindo seu aplicativo/i);
  });
});
