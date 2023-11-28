import { Layout9Story } from './Layout9';

export default {
  title: 'Example/Layout9',
  component: Layout9Story,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Primary = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uTzX6DKq4o18JpcFHFd6eu/Untitled?type=design&node-id=56-1688&mode=design&t=poJvUvVHDwCwlF9g-4',
    },
  },
};
