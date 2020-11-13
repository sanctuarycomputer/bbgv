import FounderGroq from './Founder';

export default `{
  'founders': hero.founders[]->${FounderGroq},
  'type': hero._type,
  'firstLine': hero.firstLine,
  'secondLine': hero.secondLine
}`;
