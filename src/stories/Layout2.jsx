import React from 'react';

import './page.css';
import LayoutPage from '../components/#2';
import { ConfigProvider } from 'antd';
import { theme } from '../../theme.config';

export const Layout2Story = () => {
  return (
    <ConfigProvider theme={theme}>
      <LayoutPage />
    </ConfigProvider>
  );
};
