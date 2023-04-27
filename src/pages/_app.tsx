import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {store, wrapper} from "../store/store";
import { SnackbarProvider } from 'notistack';

import '@/styles/globals.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </Provider>
  )
}

export default wrapper.withRedux(App)