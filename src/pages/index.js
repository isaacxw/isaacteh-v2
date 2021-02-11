import Head from 'next/head';
import { Layout, Hero, About, Experience } from '../components';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
      </Layout>
    </div>
  )
}
