/* eslint-disable no-use-before-define */
import React from 'react';
import Head from 'next/head';
import SearchBox from './search-box';
import Logo from './logo';

interface PageContainerProps {
  title: string;
  children?: React.ReactNode;
}

export default function PageContainer({ title, children }: PageContainerProps) {
  return (
    <div className='container max-w-2xl mx-auto'>
      <Head>
        <title>
          Pokémon Directory -
          {' '}
          {title}
        </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='flex flex-nowrap flex-col md:flex-row items-center justify-center md:justify-between py-4'>
        <Logo className='mb-8 md:mb-0' />
        <SearchBox />
      </header>

      <main>
        {children}
      </main>
    </div>
  );
}

PageContainer.defaultProps = {
  children: null,
};
