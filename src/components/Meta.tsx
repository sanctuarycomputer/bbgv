import React from 'react';
import { Helmet } from 'react-helmet';
import { SeoSettings } from 'lib/cms/types';

//TO-DO: Add default image
const DEFAULT_TITLE = 'BBG Ventures';
const DEFAULT_DESCRIPTION =
  'BBG Ventures is an early stage fund focused on consumer tech startups with a female founder. We back the new wave of entrepreneurs who are reimagining daily life, creating market-defining products and services that make our work, play and home lives simpler, better — and more satisfying.';
const DEFAULT_IMAGE = '';

interface Props {
  title?: string;
  description?: string;
  image?: string;
}

const Meta: React.FC<Props> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

const ContentPage: React.FC<{
  title?: string;
  seo?: SeoSettings;
}> = ({ title, seo }) => {
  return (
    <Meta
      title={seo?.title || title || DEFAULT_TITLE}
      description={seo?.description || DEFAULT_DESCRIPTION}
      image={seo?.image?.src || DEFAULT_IMAGE}
    />
  );
};

export { ContentPage };

export default Meta;
