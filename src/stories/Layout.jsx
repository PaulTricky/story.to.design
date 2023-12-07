import React from 'react';

import LayoutPage from '../domains/PublicLayout/PublicLayout';
import { ConfigProvider } from 'antd';
import { theme } from '../../theme.config';

export const LayoutStory = () => {
  return (
    <ConfigProvider theme={theme}>
      <LayoutPage />
    </ConfigProvider>
  );
};
