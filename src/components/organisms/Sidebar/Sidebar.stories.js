import { storiesOf } from '@storybook/react';
import Sidebar from './Sidebar';
import { withRouter } from 'storybook-addon-react-router-v6';

storiesOf('Organisms/Sidebar', module)
  .addDecorator(withRouter)
  .add('Normal', () => <Sidebar />);
