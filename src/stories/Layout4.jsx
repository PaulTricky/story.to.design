import React from 'react';

import './page.css';
import LayoutPage from '../components/#4';
import { ConfigProvider } from 'antd';
import { theme } from '../../theme.config';

export const Layout4Story = () => {
  return (
    <ConfigProvider theme={theme}>
      <LayoutPage />
    </ConfigProvider>
  );
};
