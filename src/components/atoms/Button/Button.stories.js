import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

import { withKnobs, select } from '@storybook/addon-knobs';

storiesOf('Atoms/Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => {
    const label = 'Colors';
    const options = {
      Note: 'hsl(49, 100%, 58%)',
      Twitter: 'hsl(196, 83%, 75%)',
      Article: 'hsl(106, 47%, 64%)',
      Pink: 'pink',
    };
    const defaultValue = 'hsl(49, 100%, 58%)';
    const groupId = 'GROUP-ID1';

    const value = select(label, options, defaultValue, groupId);
    return <Button color={value}>Hello World</Button>;
  })
  .add('Secondary', () => <Button secondary>Hello World</Button>);
