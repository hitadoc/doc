import Head from 'next/head';
import Content from '../../components/ContentEn';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>HitaDAO Learn-to-Earn Incentive Program Details</title>
        <meta name="keywords" content="HitaDAo,Web3,blockchain"/>
        <meta name="description" content="HitaDAO Learn-to-Earn Incentive Program Details"/>
      </Head>
      <Content/>
  </div>
  );
}