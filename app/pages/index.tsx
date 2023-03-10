import { Container } from '@chakra-ui/react';
import Head from 'next/head';
import Chakra from '@/components/Chakra';
import Mui from '@/components/Mui';
import ReactBootstrap from '@/components/ReactBootstrap';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={1000} py={4}>
        <Chakra />
        <div style={{ width: '100%', height: '200px' }}>&nbsp;</div>
        <Mui />
        <div style={{ width: '100%', height: '200px' }}>&nbsp;</div>
        <ReactBootstrap />
      </Container>
    </>
  );
}
