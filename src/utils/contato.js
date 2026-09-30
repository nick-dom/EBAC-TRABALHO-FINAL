/**
 * Funções puras de apoio ao formulário de contato — sem React, sem
 * DOM. Isso é o que as torna triviais de testar isoladamente (veja
 * `utils/__tests__/contato.test.js`).
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Valida os campos do formulário de contato e devolve um objeto de
 * erros por campo (vazio quando tudo está válido).
 *
 * @param {{ nome: string, email: string, mensagem: string }} dados
 * @returns {{ nome?: string, email?: string, mensagem?: string }}
 */
export function validarFormularioContato(dados) {
  const erros = {};

  const nome = (dados.nome ?? '').trim();
  const email = (dados.email ?? '').trim();
  const mensagem = (dados.mensagem ?? '').trim();

  if (nome.length < 2) {
    erros.nome = 'Digite seu nome completo.';
  }

  if (!email) {
    erros.email = 'Digite um e-mail para retorno.';
  } else if (!EMAIL_REGEX.test(email)) {
    erros.email = 'Digite um e-mail válido.';
  }

  if (mensagem.length < 10) {
    erros.mensagem = 'Escreva uma mensagem com pelo menos 10 caracteres.';
  }

  return erros;
}

/**
 * Monta um link `mailto:` com assunto e corpo pré-preenchidos a
 * partir dos dados do formulário. Como o portfólio é um site
 * estático (sem back-end), abrir o cliente de e-mail do usuário é a
 * forma mais simples e confiável de "enviar" a mensagem sem exigir
 * nenhum servidor.
 *
 * @param {string} destinatario
 * @param {{ nome: string, email: string, mensagem: string }} dados
 */
export function montarMailto(destinatario, dados) {
  const assunto = encodeURIComponent(`Contato via portfólio — ${dados.nome}`);
  const corpo = encodeURIComponent(`${dados.mensagem}\n\n—\n${dados.nome}\n${dados.email}`);

  return `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
}
