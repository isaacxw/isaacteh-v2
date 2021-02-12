import Head from 'next/head';
import { Layout, Hero, About, Experience } from '../components';

export default function Home() {
  return (
    <div>
      <Layout location="/">
        <Hero />
      </Layout>
    </div>
  )
}
