import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import Button from 'components/atoms/Button/Button';
import { theme } from 'theme/mainTheme';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <h1>Hello Maknaka</h1>
          <Button>Close / Save</Button>
          <Button secondary>Remove</Button>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellat excepturi
            aspernatur nesciunt ea? A exercitationem, facere molestias porro incidunt pariatur
            voluptatum blanditiis totam iste eum corrupti, suscipit mollitia. Harum consequuntur
            magnam cupiditate, debitis odio error, minus sapiente culpa voluptatem numquam beatae
            repellat eveniet rerum mollitia dolorum provident illum voluptas eius iure. Temporibus
            reprehenderit molestias ipsam aperiam libero unde magni sunt sit, quas vel. Saepe
            necessitatibus est sit, quibusdam, enim vitae ut expedita facere minus aspernatur
            suscipit harum optio animi adipisci modi quisquam repudiandae amet facilis iste aut.
            Illo possimus necessitatibus eaque hic culpa soluta dolore cumque consequatur voluptates
            nostrum?
          </Paragraph>
        </>
      </ThemeProvider>
    </div>
  );
};

export default Root;
