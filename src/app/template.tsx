'use client';

import React from 'react';

import Link from 'next/link';

import HamburgerButton from '@/components/atoms/hamburgerButton/hamburgerButton';

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
      <div className="fixed right-[30px] top-[16px] z-10">
        <HamburgerButton onClick={onHamburgerHandler} isOpen={isMenuOpen} />
      </div>

      <div className="">
        <nav>
          <ul>
            <li>
              <Link href="/">ホーム</Link>
            </li>
            <li>
              <Link href="/list/">子犬を探す</Link>
            </li>
            <li>
              <Link href="/list/">子猫を探す</Link>
            </li>
            <li>
              <Link href="/list/">小動物を探す</Link>
            </li>
            <li>
              <Link href="/list/">お魚を探す</Link>
            </li>
          </ul>
        </nav>

        <nav className="category-menu">
          <ul>
            <li>
              <Link href="/list/">
                <span className="line1">
                  <span>子犬</span>を探す
                </span>
                <span className="line2">Find puppy dogs</span>
              </Link>
            </li>
            <li>
              <Link href="/list/">
                <span className="line1">
                  <span>子猫</span>を探す
                </span>
                <span className="line2">Find puppy cats</span>
              </Link>
            </li>
            <li>
              <Link href="/list/">
                <span className="line1">
                  <span>小動物</span>を探す
                </span>
                <span className="line2">ハムスターや小鳥など</span>
              </Link>
            </li>
            <li>
              <Link href="/list/">
                <span className="line1">
                  <span>お魚</span>を探す
                </span>
                <span className="line2">熱帯魚など</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
