import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={styles.page}>
      <p className={styles.code}>ERRO 404</p>
      <h1 className={styles.title}>Área desconhecida</h1>
      <p className={styles.text}>
        Essa rota não existe no mapa. Volte para o menu principal e escolha um caminho válido.
      </p>
      <Link to="/" className={styles.button}>
        Voltar ao menu
      </Link>
    </div>
  );
}
