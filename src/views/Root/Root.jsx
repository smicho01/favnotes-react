import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import Button from 'components/atoms/Button/Button';
import { theme } from 'theme/mainTheme';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

import bulbIcon from 'assets/icons/bulb.svg';
import Card from 'components/molecules/Card/Card';

const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <h1>Hello Maknaka</h1>
          <Card />
        </>
      </ThemeProvider>
    </div>
  );
};

export default Root;
