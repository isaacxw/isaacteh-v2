import { Global } from '../styles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
