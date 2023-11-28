import React from 'react';

import './page.css';
import LayoutPage from '../components/#10';
import { ConfigProvider } from 'antd';
import { theme } from '../../theme.config';

export const Layout10Story = () => {
  return (
    <ConfigProvider theme={theme}>
      <LayoutPage />
    </ConfigProvider>
  );
};
