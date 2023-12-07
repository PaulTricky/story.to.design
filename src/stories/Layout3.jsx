import React from 'react';

import LayoutPage from '../components/#3';
import { ConfigProvider } from 'antd';
import { theme } from '../../theme.config';

export const Layout3Story = () => {
  return (
    <ConfigProvider theme={theme}>
      <LayoutPage />
    </ConfigProvider>
  );
};
