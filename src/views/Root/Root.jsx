import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';

import Button from 'components/Button/Button';

const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <h1>Hello Maknaka</h1>
      <Button width="300px">Close / Save</Button>
      <Button secondary>Remove</Button>
    </div>
  );
};

export default Root;
