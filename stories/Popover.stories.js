import { fn } from '@storybook/test';

import { Popover } from './Popover';

export default {
  title: 'Example/Popover',
  component: Popover,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export const Hello = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

