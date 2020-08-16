import Link from 'next/link';

import Layout from 'components/Layout/Layout';
import { ThemeProvider } from 'styled-components';

import { theme } from 'theme/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
