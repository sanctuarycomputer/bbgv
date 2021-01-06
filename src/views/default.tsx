import React, { FC } from 'react';
import { DefaultPage } from '../lib/cms/types';
import { Props as ContainerProps } from 'containers/default';

import { ContentPage as Meta } from 'components/Meta';
import TextModule from 'components/layouts/TextModule';
import DefaultPageContent from 'components/layouts/DefaultPageContent';

type Props = ContainerProps & {
  model: DefaultPage;
};

const DefaultView: FC<Props> = (props) => {
  const { model } = props;
  const { intro, seo, content } = model;

  return (
    <div className="DefaultView generic-page-margin-top">
      <Meta seo={seo} />
      <TextModule
        className="text-module-padding-x py3_75 lg:py7_5"
        variant="default"
        heading={intro.heading}
        subheading={intro.subheading}
        briefParagraph={intro.briefParagraph}
      />
      <article>
        <DefaultPageContent content={content} />
      </article>
    </div>
  );
};

export default DefaultView;
