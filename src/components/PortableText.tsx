import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { Block } from 'lib/cms/types';

type Props = {
  blocks: Block[];
};

const PortableText: React.FC<Props> = ({ blocks }) => <BlockContent blocks={blocks} />;

export default PortableText;
