import { useCallback, useState } from 'react';

/**
 * Copia um texto para a área de transferência e expõe um estado
 * `copiado` que volta a `false` sozinho depois de um tempo — usado
 * pro botão "copiar e-mail" dar feedback visual sem precisar de
 * gerenciamento de estado externo em quem usa o hook.
 */
export function useCopyToClipboard(duracaoMs = 2000) {
  const [copiado, setCopiado] = useState(false);
  const [erro, setErro] = useState(false);

  const copiar = useCallback(
    async (texto) => {
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(texto);
        } else {
          throw new Error('Clipboard API indisponível');
        }
        setCopiado(true);
        setErro(false);
      } catch {
        setErro(true);
        setCopiado(false);
      } finally {
        window.setTimeout(() => {
          setCopiado(false);
          setErro(false);
        }, duracaoMs);
      }
    },
    [duracaoMs]
  );

  return { copiar, copiado, erro };
}
