import { describe, expect, it } from 'vitest';
import { montarMailto, validarFormularioContato } from '../contato';

describe('validarFormularioContato', () => {
  it('não retorna erros para dados válidos', () => {
    // Arrange
    const dados = { nome: 'Ana Silva', email: 'ana@exemplo.com', mensagem: 'Olá, tudo bem?' };

    // Act
    const erros = validarFormularioContato(dados);

    // Assert
    expect(erros).toEqual({});
  });

  it('rejeita nome muito curto', () => {
    const erros = validarFormularioContato({
      nome: 'A',
      email: 'ana@exemplo.com',
      mensagem: 'Mensagem válida aqui',
    });

    expect(erros.nome).toBeDefined();
  });

  it('rejeita e-mail vazio', () => {
    const erros = validarFormularioContato({
      nome: 'Ana Silva',
      email: '',
      mensagem: 'Mensagem válida aqui',
    });

    expect(erros.email).toBe('Digite um e-mail para retorno.');
  });

  it('rejeita e-mail com formato inválido', () => {
    const erros = validarFormularioContato({
      nome: 'Ana Silva',
      email: 'ana@exemplo',
      mensagem: 'Mensagem válida aqui',
    });

    expect(erros.email).toBe('Digite um e-mail válido.');
  });

  it('rejeita mensagem muito curta', () => {
    const erros = validarFormularioContato({
      nome: 'Ana Silva',
      email: 'ana@exemplo.com',
      mensagem: 'oi',
    });

    expect(erros.mensagem).toBeDefined();
  });

  it('tolera espaços em branco nas pontas dos campos', () => {
    const erros = validarFormularioContato({
      nome: '  Ana Silva  ',
      email: '  ana@exemplo.com  ',
      mensagem: '  Mensagem válida com espaços  ',
    });

    expect(erros).toEqual({});
  });
});

describe('montarMailto', () => {
  it('monta um link mailto com assunto e corpo codificados', () => {
    // Arrange
    const dados = { nome: 'Ana Silva', email: 'ana@exemplo.com', mensagem: 'Olá!' };

    // Act
    const link = montarMailto('destino@exemplo.com', dados);

    // Assert
    expect(link.startsWith('mailto:destino@exemplo.com?subject=')).toBe(true);
    expect(link).toContain(encodeURIComponent('Contato via portfólio — Ana Silva'));
    expect(link).toContain('body=');
  });

  it('inclui o nome e o e-mail do remetente no corpo da mensagem', () => {
    const dados = { nome: 'Bruno', email: 'bruno@exemplo.com', mensagem: 'Mensagem teste' };

    const link = montarMailto('destino@exemplo.com', dados);
    const corpoDecodificado = decodeURIComponent(link.split('body=')[1]);

    expect(corpoDecodificado).toContain('Bruno');
    expect(corpoDecodificado).toContain('bruno@exemplo.com');
    expect(corpoDecodificado).toContain('Mensagem teste');
  });
});
