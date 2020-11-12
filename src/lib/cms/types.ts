import * as t from 'io-ts';

export type Image = t.TypeOf<typeof Image>;
export const Image = t.type({
  id: t.string,
  src: t.string,
  alt: t.string,
  caption: t.string,
});

export type SeoSettings = t.TypeOf<typeof SeoSettings>;
export const SeoSettings = t.partial({
  title: t.string,
  description: t.string,
  image: Image,
});

export type GlobalSettings = t.TypeOf<typeof GlobalSettings>;
export const GlobalSettings = t.partial({
  title: t.string,
});

export type HomePage = t.TypeOf<typeof HomePage>;
export const HomePage = t.partial({
  seo: SeoSettings,
});
