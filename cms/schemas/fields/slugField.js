import { validateSlug } from '../../../src/constants/Regex';

export default {
  name: 'slugField',
  title: 'Slug',
  description:
    'This is part of the page URL. Examples: "/about", "/our-story", "/connect". The slug for a Company Detail Page might be "/alula". The slug must start with "/".',
  validation: (Rule) =>
    Rule.required().custom((string) => {
      if (string[0] !== '/') {
        return 'It must start with "/"';
      }

      if (string.slice(1).length === 0) {
        return true;
      }

      return validateSlug.test(string.slice(1))
        ? true
        : 'It must be delimited by hyphens without any special characters: i.e. "slug-string"';
    }),
  type: 'string',
};
