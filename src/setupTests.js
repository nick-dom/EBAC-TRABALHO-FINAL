import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Sem isso, cada `render()` de um teste ficaria acumulado no DOM do
// teste seguinte (já que não usamos o modo `globals` do Vitest, que é
// o que a Testing Library detecta automaticamente para fazer isso).
afterEach(() => {
  cleanup();
});

// jsdom não implementa IntersectionObserver nem ResizeObserver.
// Nenhum componente atual depende deles, mas mantemos o stub como
// rede de segurança caso algum futuro componente venha a usá-los.
if (typeof window.IntersectionObserver === 'undefined') {
  window.IntersectionObserver = class IntersectionObserverStub {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

if (typeof window.matchMedia === 'undefined') {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  });
}

// jsdom não implementa scrollTo (não faz layout de verdade) — o
// Layout usa isso só para resetar a posição ao trocar de rota.
window.scrollTo = () => {};
