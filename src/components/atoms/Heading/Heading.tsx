import React from 'react';

import clsx from 'clsx';

interface HeadingProps {
  className?: string;
  level: 'h2' | 'h3';
  children: React.ReactNode;
}
export default function Heading({
  className,
  level = 'h2',
  children,
}: HeadingProps) {
  if (level === 'h2') {
    return (
      <h2
        className={clsx(
          'bg-primary text-white rounded-full py-3.5 px-8 text-lg lg:text-xl',
          className,
        )}
      >
        {children}
      </h2>
    );
  }
  return (
    <h3
      className={clsx(
        'bg-neutral-100 text-neutral-600 rounded-full py-3.5 px-8 text-base lg:text-lg',
        className,
      )}
    >
      {children}
    </h3>
  );
}
