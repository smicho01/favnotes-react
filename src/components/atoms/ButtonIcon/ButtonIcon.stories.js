import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonIcon from './ButtonIcon';
import styled from 'styled-components';

import bulbIcon from 'assets/icons/bulb.svg';
import linkIcon from 'assets/icons/link.svg';
import logoutIcon from 'assets/icons/logout.svg';
import magnifierIcon from 'assets/icons/magnifier.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';

const YellowBackgound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.note};
`;

storiesOf('ButtonIcon', module)
  .addDecorator((story) => <YellowBackgound>{story()}</YellowBackgound>)
  .add('Bulb', () => <ButtonIcon icon={bulbIcon} />)
  .add('Bulb Active ', () => <ButtonIcon active icon={bulbIcon} />)
  .add('Logout', () => <ButtonIcon icon={logoutIcon} />)
  .add('Pen', () => <ButtonIcon icon={penIcon} />)
  .add('Plus', () => <ButtonIcon icon={plusIcon} />)
  .add('Twitter', () => <ButtonIcon icon={twitterIcon} />);
