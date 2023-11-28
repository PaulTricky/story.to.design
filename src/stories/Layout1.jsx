import React from 'react';

import './page.css';
import LayoutPage from '../components/#1';
import { ConfigProvider } from 'antd';
import { theme } from '../../theme.config';

export const Layout1Story = () => {
  return (
    <ConfigProvider theme={theme}>
      <LayoutPage />
    </ConfigProvider>
  );
};
