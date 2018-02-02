import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo, setDefaults } from '@storybook/addon-info';

const req = require.context('../src', true, /.story.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true, // Displays the source of story Component
  propTablesExclude: [], // Exclude Components from being shoun in Prop Tables section
  styles: {
    infoBody: {
      backgroundColor: 'rgba(255, 255, 255, 0.43)',
    },
  }, // Overrides style of addon
});

addDecorator((story, context) => withInfo()(story)(context));
addDecorator(withKnobs);
configure(loadStories, module);
