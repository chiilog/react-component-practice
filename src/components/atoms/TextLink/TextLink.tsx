import React from 'react';

import Link from 'next/link';

interface TextLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function TextLink({ children, href }: TextLinkProps) {
  return (
    <Link
      href={href}
      className="underline hover:text-primary transition-colors duration-300"
    >
      {children}
    </Link>
  );
}
