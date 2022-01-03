import type { AppProps } from 'next/app';
import Head from 'next/head';
import Main from 'components/layouts/Main';
import 'assets/styles/app.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
      <>
      <Head>
        <meta
          key="viewport"
          content="initial-scale=1.0, width=device-width"
          name="viewport" />
        </Head>
        <Main>
        <Component {...pageProps} />
      </Main>
      </>
  );
};

export default App;
