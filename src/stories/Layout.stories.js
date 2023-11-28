import { LayoutStory } from './Layout';

export default {
  title: 'Example/Layout',
  component: LayoutStory,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Primary = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uTzX6DKq4o18JpcFHFd6eu/Untitled?type=design&node-id=21-228&mode=design&t=njiPkQBATKyUG6v4-4',
    },
  },
};
