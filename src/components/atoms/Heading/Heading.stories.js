import React from 'react';
import { storiesOf } from '@storybook/react';

import Heading from './Heading';

storiesOf('Atoms/Heading', module)
  .add('Normal', () => <Heading>This is heading Normal</Heading>)
  .add('Big', () => <Heading big>This is heading Big</Heading>);
