// @ 가 src 를 의미함.
import wrapper from "@/pages/basic/_03_redux/_redux";

import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}
