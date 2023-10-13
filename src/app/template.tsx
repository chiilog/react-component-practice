'use client';

import React from 'react';

import Link from 'next/link';

import HamburgerButton from '@/components/atoms/HamburgerButton/HamburgerButton';
import AnimalIconNavListItem from '@/components/molecules/AnimalIconNavListItem/AnimalIconNavListItem';
import Drawer from '@/components/molecules/Drawer/Drawer';
import AnimalIconNavList from '@/components/organisms/AnimalIconNavList/AnimalIconNavList';

export default function Template({ children }: { children: React.ReactNode }) {
  /**
   * ハンバーガーメニューの開閉状態を管理するstate
   */
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const onHamburgerHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {children}
      <div className="fixed right-[30px] top-[16px] z-20">
        <HamburgerButton onClick={onHamburgerHandler} isOpen={isMenuOpen} />
      </div>

      <Drawer isOpen={isMenuOpen}>
        <nav className="lg:w-3/12 mx-auto">
          <ul>
            <li>
              <Link href="/" className="text-white block p-2.5">
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/list/" className="text-white block p-2.5">
                子犬を探す
              </Link>
            </li>
            <li>
              <Link href="/list/" className="text-white block p-2.5">
                子猫を探す
              </Link>
            </li>
            <li>
              <Link href="/list/" className="text-white block p-2.5">
                小動物を探す
              </Link>
            </li>
            <li>
              <Link href="/list/" className="text-white block p-2.5">
                お魚を探す
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="lg:w-3/12 mx-auto text-left">
          <AnimalIconNavList direction="vertical">
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
        </nav>
      </Drawer>
    </>
  );
}
