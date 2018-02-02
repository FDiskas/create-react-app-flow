// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { App } from './App';

const props = {
  title: 'App.js',
};

storiesOf('App', module).add('App.js', () => {
  return <App onChange={action('change')} {...props} disabled={boolean('Disabled', false)} />;
});
