import { within, userEvent } from '@storybook/testing-library';
import { LoginStory } from './Login';

export default {
  title: 'Example/Login',
  component: LoginStory,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Primary = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uTzX6DKq4o18JpcFHFd6eu/Untitled?type=design&node-id=15-119&mode=design&t=njiPkQBATKyUG6v4-4',
    },
  },
};
