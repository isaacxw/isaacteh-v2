import Head from 'next/head';
import { Layout, Hero } from '../components';
import '../node_modules/font-awesome/css/font-awesome.min.css';

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
      </Layout>
    </div>
  )
}
