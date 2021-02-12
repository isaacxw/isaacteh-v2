import { Global } from '../styles';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
