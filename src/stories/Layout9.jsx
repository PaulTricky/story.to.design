import React from 'react';

import './page.css';
import LayoutPage from '../components/#9';
import { ConfigProvider } from 'antd';
import { theme } from '../../theme.config';

export const Layout9Story = () => {
  return (
    <ConfigProvider theme={theme}>
      <LayoutPage />
    </ConfigProvider>
  );
};
