import { useEffect } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import { MoonIcon, SunIcon } from './icons';
import styles from './ThemeToggle.module.css';

const prefereClaroPorPadrao = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: light)').matches;

export default function ThemeToggle() {
  const [tema, setTema] = useLocalStorageState(
    'portfolio:tema',
    prefereClaroPorPadrao() ? 'light' : 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema);
  }, [tema]);

  const alternar = () => setTema((atual) => (atual === 'dark' ? 'light' : 'dark'));
  const claro = tema === 'light';

  return (
    <button
      type="button"
      onClick={alternar}
      className={styles.botao}
      aria-label={claro ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
      title={claro ? 'Tema escuro' : 'Tema claro'}
    >
      {claro ? <MoonIcon size={17} /> : <SunIcon size={17} />}
    </button>
  );
}
