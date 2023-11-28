import '@/styles/globals.scss';
import { ConfigProvider } from 'antd';
import { theme } from '../../theme.config';

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider theme={theme}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
