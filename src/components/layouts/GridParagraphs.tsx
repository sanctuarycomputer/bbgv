import React from 'react';
import cx from 'classnames';
import { ParagraphWithHeading } from 'lib/cms/types';
import PortableText from 'components/PortableText';

type Props = {
  className?: string;
  sections: ParagraphWithHeading[];
};

const GridParagraphs: React.FC<Props> = ({ sections, className }) => {
  return (
    <div
      className={cx(
        'GridParagraphs col-12 md:col-8 mxauto flex flex-row flex-wrap secondary-sm',
        className
      )}
    >
      {sections.map((section: ParagraphWithHeading) => (
        <div key={section.heading} className="GridParagraphs__section">
          {Paragraph(section)}
        </div>
      ))}
    </div>
  );
};

export default GridParagraphs;

const Paragraph = (section: ParagraphWithHeading) => {
  return (
    <div className="GridParagraphs__section-inner-container">
      <span className="GridParagraphs__heading pr5 lg:pr7 primary-md vertical-align-middle left">
        {section.heading}
      </span>

      <span className="GridParagraphs__paragraph vertical-align-middle secondary-sm">
        <PortableText blocks={section.paragraph} />
      </span>
    </div>
  );
};
