import React from 'react';

import './page.css';
import LayoutPage from '../components/#6';
import { ConfigProvider } from 'antd';
import { theme } from '../../theme.config';

export const Layout6Story = () => {
  return (
    <ConfigProvider theme={theme}>
      <LayoutPage />
    </ConfigProvider>
  );
};
