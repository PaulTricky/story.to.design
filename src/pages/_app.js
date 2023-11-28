import '../styles/globals.scss';
import '../styles/styles.scss';
import { ConfigProvider } from 'antd';
import { theme } from '../../theme.config';
import NavbarComponent from '@/components/#1';

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider  >
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
