import React from 'react';

import './page.css';
import LayoutPage from '../components/#5';
import { ConfigProvider } from 'antd';
import { theme } from '../../theme.config';

export const Layout5Story = () => {
  return (
    <ConfigProvider theme={theme}>
      <LayoutPage />
    </ConfigProvider>
  );
};
