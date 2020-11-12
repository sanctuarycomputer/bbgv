import * as t from 'io-ts';

export type Image = t.TypeOf<typeof Image>;
export const Image = t.type({
  id: t.string,
  src: t.string,
  alt: t.string,
  caption: t.string,
});

export type Button = t.TypeOf<typeof Button>;
export const Button = t.type({
  label: t.string,
  link: t.string,
});

export type Block = t.TypeOf<typeof Block>;
export const Block = t.type({
  _key: t.string,
  _type: t.string,
  markDefs: t.array(t.string),
  style: t.string,
  children: t.array(
    t.partial({ _key: t.string, _type: t.string, marks: t.array(t.string), text: t.string })
  ),
});

export type Company = t.TypeOf<typeof Company>;
export const Company = t.partial({
  _type: t.string,
  description: t.array(Block),
  tag: t.string,
  sector: t.string,
  logo: Image,
  name: t.string,
});

export type Founder = t.TypeOf<typeof Founder>;
export const Founder = t.partial({
  _type: t.string,
  firstName: t.string,
  lastName: t.string,
  jobTitle: t.string,
  bio: t.array(Block),
  twitter: t.string,
  instagram: t.string,
  linkedIn: t.string,
  founderPortrait: Image,
  company: t.string,
  sector: t.string,
});

export type HomeHero = t.TypeOf<typeof HomeHero>;
export const HomeHero = t.type({
  _type: t.string,
  founders: t.array(Founder),
  firstLine: t.string,
  secondLine: t.string,
});

export type ImageDimensions = t.TypeOf<typeof ImageDimensions>;
export const ImageDimensions = t.type({
  width: t.number,
  height: t.number,
});

export type ImageCrop = t.TypeOf<typeof ImageCrop>;
export const ImageCrop = t.type({
  bottom: t.union([t.number, t.undefined]),
  left: t.union([t.number, t.undefined]),
  top: t.union([t.number, t.undefined]),
  right: t.union([t.number, t.undefined]),
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
export const HomePage = t.type({
  hero: HomeHero,
  seo: SeoSettings,
});
