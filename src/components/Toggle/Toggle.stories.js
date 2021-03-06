import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Component from './Toggle.Story.svelte';

export default { title: 'Toggle', decorators: [withKnobs] };

export const Default = () => ({
  Component,
  props: {
    labelText: text('Label toggle input control (labelText)', ''),
    'aria-label': text('ARIA label of the toggle (aria-label)', ''),
    labelA: text('Label for untoggled state (labelA)', 'Off'),
    labelB: text('Label for toggled state (labelB)', 'On'),
    disabled: boolean('Disabled (disabled)', false),
    id: text('Toggle id', 'toggle-id'),
    name: text('Toggle name', 'toggle-name')
  }
});

Default.story = { name: 'Default (untoggled)' };

export const Toggled = () => ({
  Component,
  props: {
    story: 'toggled',
    labelText: text('Label toggle input control (labelText)', ''),
    'aria-label': text('ARIA label of the toggle (aria-label)', ''),
    labelA: text('Label for untoggled state (labelA)', 'Off'),
    labelB: text('Label for toggled state (labelB)', 'On'),
    disabled: boolean('Disabled (disabled)', false),
    id: text('Toggle id', 'toggle-id'),
    name: text('Toggle name', 'toggle-name')
  }
});

export const Skeleton = () => ({ Component, props: { story: 'skeleton' } });
