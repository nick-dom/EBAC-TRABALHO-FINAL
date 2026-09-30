import { useEffect, useRef, useState } from 'react';

const prefereMovimentoReduzido = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Anima uma sequência de linhas de terminal sendo "digitadas", uma de
 * cada vez. Devolve as linhas já reveladas (prontas para renderizar)
 * e se a sequência inteira já terminou — usado para disparar o
 * próximo elemento (o cursor final, os botões de CTA) só depois que a
 * "digitação" acaba.
 *
 * Respeita `prefers-reduced-motion`: se a pessoa pediu menos
 * movimento, todas as linhas aparecem de uma vez, sem animação.
 *
 * @param {Array<{ text: string, className?: string }>} linhas
 * @param {number} velocidadeMs tempo por caractere
 */
export function useTypedTerminal(linhas, velocidadeMs = 18) {
  const [reveladas, setReveladas] = useState(() =>
    prefereMovimentoReduzido() ? linhas.map((l) => l.text) : linhas.map(() => '')
  );
  const [concluido, setConcluido] = useState(prefereMovimentoReduzido());
  const linhasRef = useRef(linhas);

  useEffect(() => {
    if (prefereMovimentoReduzido()) {
      setReveladas(linhasRef.current.map((l) => l.text));
      setConcluido(true);
      return undefined;
    }

    let cancelado = false;
    let indiceLinha = 0;
    let indiceChar = 0;
    let timeoutId;

    function passo() {
      if (cancelado) return;

      const linhaAtual = linhasRef.current[indiceLinha];
      if (!linhaAtual) {
        setConcluido(true);
        return;
      }

      indiceChar += 1;
      setReveladas((atual) => {
        const proximo = [...atual];
        proximo[indiceLinha] = linhaAtual.text.slice(0, indiceChar);
        return proximo;
      });

      if (indiceChar >= linhaAtual.text.length) {
        indiceLinha += 1;
        indiceChar = 0;
        timeoutId = window.setTimeout(passo, 260); // pausa entre linhas
      } else {
        timeoutId = window.setTimeout(passo, velocidadeMs);
      }
    }

    timeoutId = window.setTimeout(passo, 300); // pequena pausa inicial

    return () => {
      cancelado = true;
      window.clearTimeout(timeoutId);
    };
  }, [velocidadeMs]);

  return { reveladas, concluido };
}
