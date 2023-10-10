import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LogoProps {
  src: string;
  className?: string;
}

export default function Logo({ src, className }: LogoProps) {
  /**
   * URLのパスがトップページであればh1、それ以外はdivを返す。
   * @see https://nextjs.org/docs/api-reference/next/router#userouter
   */
  const pathName = usePathname();
  const TAG = pathName === '/' ? 'h1' : 'div';
  return (
    <TAG id="logo" className={`relative ${className}`}>
      <Link href="/">
        <Image src={src} alt="SAMPLE PET SHOP" fill />
      </Link>
    </TAG>
  );
}
