import { useState } from 'react';
import { profile } from '../data/profile';
import { montarMailto, validarFormularioContato } from '../utils/contato';
import styles from './ContactForm.module.css';

const VALORES_INICIAIS = { nome: '', email: '', mensagem: '' };

export default function ContactForm() {
  const [dados, setDados] = useState(VALORES_INICIAIS);
  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (campo) => (evento) => {
    setDados((atual) => ({ ...atual, [campo]: evento.target.value }));
    // Limpa o erro do campo assim que a pessoa começa a corrigi-lo,
    // em vez de deixar a mensagem de erro "grudada" até o reenvio.
    setErros((atual) => ({ ...atual, [campo]: undefined }));
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    const errosEncontrados = validarFormularioContato(dados);
    setErros(errosEncontrados);

    if (Object.keys(errosEncontrados).length > 0) {
      setEnviado(false);
      return;
    }

    const link = montarMailto(profile.email, dados);
    window.location.href = link;
    setEnviado(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="contato-nome" className={styles.label}>
          Nome
        </label>
        <input
          id="contato-nome"
          name="nome"
          type="text"
          autoComplete="name"
          value={dados.nome}
          onChange={handleChange('nome')}
          className={styles.input}
          aria-invalid={Boolean(erros.nome)}
          aria-describedby={erros.nome ? 'erro-nome' : undefined}
        />
        {erros.nome && (
          <p id="erro-nome" className={styles.erro} role="alert">
            {erros.nome}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="contato-email" className={styles.label}>
          Seu e-mail
        </label>
        <input
          id="contato-email"
          name="email"
          type="email"
          autoComplete="email"
          value={dados.email}
          onChange={handleChange('email')}
          className={styles.input}
          aria-invalid={Boolean(erros.email)}
          aria-describedby={erros.email ? 'erro-email' : undefined}
        />
        {erros.email && (
          <p id="erro-email" className={styles.erro} role="alert">
            {erros.email}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="contato-mensagem" className={styles.label}>
          Mensagem
        </label>
        <textarea
          id="contato-mensagem"
          name="mensagem"
          rows={5}
          value={dados.mensagem}
          onChange={handleChange('mensagem')}
          className={styles.textarea}
          aria-invalid={Boolean(erros.mensagem)}
          aria-describedby={erros.mensagem ? 'erro-mensagem' : undefined}
        />
        {erros.mensagem && (
          <p id="erro-mensagem" className={styles.erro} role="alert">
            {erros.mensagem}
          </p>
        )}
      </div>

      <button type="submit" className={styles.submit}>
        Enviar mensagem
      </button>

      {enviado && (
        <p className={styles.sucesso} role="status">
          Abrindo seu aplicativo de e-mail com a mensagem pronta para enviar.
        </p>
      )}

      <p className={styles.aviso}>
        Este formulário abre seu cliente de e-mail padrão — nenhum dado é enviado a um servidor.
      </p>
    </form>
  );
}
