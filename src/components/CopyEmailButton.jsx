import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import { CheckIcon, CopyIcon } from './icons';
import styles from './CopyEmailButton.module.css';

export default function CopyEmailButton({ email }) {
  const { copiar, copiado, erro } = useCopyToClipboard();

  return (
    <button type="button" className={styles.botao} onClick={() => copiar(email)}>
      {copiado ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
      {copiado ? 'E-mail copiado!' : erro ? 'Não foi possível copiar' : 'Copiar e-mail'}
    </button>
  );
}
