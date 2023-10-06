import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LogoProps {
  src: string;
  className?: string;
}

export default function Logo({ src, className }: LogoProps) {
  const pathName = usePathname();
  const TAG = pathName === '/' ? 'h1' : 'div';
  return (
    <TAG id="logo" className={className}>
      <Link href="/">
        <Image src={src} alt="SAMPLE PET SHOP" fill />
      </Link>
    </TAG>
  );
}
