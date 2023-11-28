import { Layout3Story } from './Layout3';

export default {
  title: 'Example/Layout3',
  component: Layout3Story,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Primary = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uTzX6DKq4o18JpcFHFd6eu/Untitled?type=design&node-id=3-3&mode=design&t=UEpMD5KfXit4Tin5-4',
    },
  },
};
