import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import createEmotionCache from '@/utils/createEmotionCache';
import theme from '@/utils/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
