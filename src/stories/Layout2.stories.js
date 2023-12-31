import { Layout2Story } from './Layout2';

export default {
  title: 'Example/Layout2',
  component: Layout2Story,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Primary = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uTzX6DKq4o18JpcFHFd6eu/Untitled?type=design&node-id=22-355&mode=design&t=njiPkQBATKyUG6v4-4',
    },
  },
};
