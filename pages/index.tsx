import Head from 'next/head';
import Content from '../components/Content';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>HitaDAO 学赚奖励计划</title>
        <meta name="keywords" content="HitaDAo,Web3,区块链"/>
        <meta name="description" content="HitaDAO 学赚奖励计划"/>
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon"/>
      </Head>
      <Content/>
  </div>
  );
}