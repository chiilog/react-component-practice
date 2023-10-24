import React from 'react';

import Link from 'next/link';

interface TextLinkProps {
  children: React.ReactNode;
  href: string;
  isExternal?: boolean;
}
const className = 'underline hover:text-primary transition-colors duration-300';

export default function TextLink({
  children,
  href,
  isExternal,
}: TextLinkProps) {
  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
