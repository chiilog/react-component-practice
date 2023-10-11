'use client';

import React from 'react';

import Logo from '@/components/atoms/Logo/Logo';
import AnimalIconNavList from '@/components/molecules/AnimalIconNavList/AnimalIconNavList';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-primary">
        <div className="flex items-center h-[80px] pl-5">
          <Logo
            src="/images/logo.png"
            className="w-[300px] h-[30px] max-sm:w-[220px] max-sm:h-[22px]"
          />
        </div>
        <AnimalIconNavList
          nav={[
            {
              href: '/list/',
              type: 'dog',
              description: 'Find puppy dogs.',
            },
            {
              href: '/list/',
              type: 'cat',
              description: 'Find puppy cats.',
            },
            {
              href: '/list/',
              type: 'other',
              description: 'ハムスターや小鳥など',
            },
            {
              href: '/list/',
              type: 'fish',
              description: '熱帯魚など',
            },
          ]}
        />
      </header>
      <div id="contents">{children}</div>
    </>
  );
}
