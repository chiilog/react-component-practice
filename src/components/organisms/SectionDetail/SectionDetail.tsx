import React from 'react';

import clsx from 'clsx';

interface SectionDetailProps {
  className?: string;
  children: React.ReactNode;
}

export default function SectionDetail({
  className,
  children,
}: SectionDetailProps) {
  return (
    <div className={clsx('mx-8 leading-loose', className)}>{children}</div>
  );
}
