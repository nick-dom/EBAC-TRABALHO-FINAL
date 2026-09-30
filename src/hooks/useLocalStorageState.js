import { useEffect, useState } from 'react';

/**
 * Estado sincronizado com localStorage. Falha de forma segura: se o
 * armazenamento estiver indisponível (modo privado, cota excedida,
 * SSR) ou o conteúdo salvo estiver corrompido, cai de volta no valor
 * padrão em vez de quebrar a aplicação.
 *
 * @param {string} key
 * @param {any} valorPadrao
 */
export function useLocalStorageState(key, valorPadrao) {
  const [valor, setValor] = useState(() => {
    if (typeof window === 'undefined') return valorPadrao;

    try {
      const salvo = window.localStorage.getItem(key);
      return salvo !== null ? JSON.parse(salvo) : valorPadrao;
    } catch {
      return valorPadrao;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(valor));
    } catch {
      // Armazenamento indisponível — a aplicação continua funcionando
      // normalmente, só não persiste entre sessões.
    }
  }, [key, valor]);

  return [valor, setValor];
}
