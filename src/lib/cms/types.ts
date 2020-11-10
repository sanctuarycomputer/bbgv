import * as t from 'io-ts';

export type GlobalSettings = t.TypeOf<typeof GlobalSettings>;
export const GlobalSettings = t.partial({
  title: t.string,
});
