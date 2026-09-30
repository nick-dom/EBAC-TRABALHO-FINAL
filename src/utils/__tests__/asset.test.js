import { describe, expect, it } from 'vitest';
import { asset } from '../asset';

describe('asset', () => {
  it('remove a barra inicial duplicada ao juntar com o BASE_URL', () => {
    expect(asset('/img/avatar.webp')).toBe(`${import.meta.env.BASE_URL}img/avatar.webp`);
  });

  it('funciona igual sem a barra inicial', () => {
    expect(asset('img/avatar.webp')).toBe(`${import.meta.env.BASE_URL}img/avatar.webp`);
  });
});
