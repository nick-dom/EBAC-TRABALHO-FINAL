import { useEffect, useState } from 'react';

/**
 * Observa uma lista de ids de seção e devolve qual delas está mais
 * visível no momento — usado para destacar o item ativo na navegação
 * enquanto a pessoa rola a página, sem precisar de uma rota por seção.
 *
 * @param {string[]} sectionIds
 */
export function useActiveSection(sectionIds) {
  const [ativa, setAtiva] = useState(sectionIds[0]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const elementos = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (elementos.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entradas) => {
        const visivel = entradas
          .filter((entrada) => entrada.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visivel) {
          setAtiva(visivel.target.id);
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elementos.forEach((elemento) => observer.observe(elemento));
    return () => observer.disconnect();
  }, [sectionIds]);

  return ativa;
}
