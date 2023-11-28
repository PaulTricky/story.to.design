import React from 'react';

import './page.css';
import LoginPage from '../domains/Login';
import { ConfigProvider } from 'antd';
import { theme } from '../../theme.config';

export const LoginStory = () => {
  return (
    <ConfigProvider theme={theme}>
      <LoginPage />
    </ConfigProvider>
  );
};
