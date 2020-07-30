import { Fragment } from 'react';
import { Provider } from 'react-redux';
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import 'react-datepicker/dist/react-datepicker.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { theme } from '../theme';
import store from '../store';
import './map.css';
const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Fragment>
        <Head>
          <title>Multi-Step Form</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <script
            type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyATyME8aPrEABRhIh8mtOXnfNdQ8ofNEq0&libraries=places"
          ></script>
        </Head>
        <ThemeProvider theme={theme}>
          <AppBar position="fixed">
            <Toolbar variant="dense">
              <Typography variant="h6">Multi-Step Form</Typography>
            </Toolbar>
          </AppBar>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <CssBaseline />
          <Container>
            <Box marginTop={10}>
              <Component {...pageProps} />
            </Box>
          </Container>
        </ThemeProvider>
      </Fragment>
    </Provider>
  );
};

export default MyApp;
