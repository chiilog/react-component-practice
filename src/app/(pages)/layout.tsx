'use client';

import React from 'react';

import Logo from '@/components/atoms/Logo/Logo';
import AnimalIconNavListItem from '@/components/molecules/AnimalIconNavListItem/AnimalIconNavListItem';
import AnimalIconNavList from '@/components/organisms/AnimalIconNavList/AnimalIconNavList';
import Container from '@/components/organisms/Container/Container';

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
        <AnimalIconNavList>
          <AnimalIconNavListItem
            href="/list/"
            type="dog"
            description="Find puppy dogs."
          />
          <AnimalIconNavListItem
            href="/list/"
            type="cat"
            description="Find puppy cats."
          />
          <AnimalIconNavListItem
            href="/list/"
            type="other"
            description="ハムスターや小鳥など"
          />
          <AnimalIconNavListItem
            href="/list/"
            type="fish"
            description="熱帯魚など"
          />
        </AnimalIconNavList>
      </header>
      <Container>{children}</Container>
    </>
  );
}
