import { IoMdSettings as SettingsIcon } from 'react-icons/io';

export default {
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  icon: SettingsIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Global Settings' };
    },
  },
};
