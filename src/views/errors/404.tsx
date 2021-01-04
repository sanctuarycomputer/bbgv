import React, { FC } from 'react';

type Props = {
  error?: Error;
};

const FourHundred: FC<Props> = ({ error }) => <div>Page not found</div>;

export default FourHundred;
