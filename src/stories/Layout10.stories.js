import { Layout10Story } from './Layout10';

export default {
  title: 'Example/Layout10',
  component: Layout10Story,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Primary = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uTzX6DKq4o18JpcFHFd6eu/Untitled?type=design&node-id=40-1250&mode=design&t=njiPkQBATKyUG6v4-4',
    },
  },
};
