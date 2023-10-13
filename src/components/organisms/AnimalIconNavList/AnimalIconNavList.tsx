import React from 'react';

interface AnimalIconNavListProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'vertical' | 'horizontal';
}

export default function AnimalIconNavList({
  children,
  className,
  direction = 'horizontal',
}: AnimalIconNavListProps) {
  if (direction === 'vertical') {
    return (
      <nav className={className}>
        <ul className="flex flex-col">{children}</ul>
      </nav>
    );
  }

  return (
    <nav className={className}>
      <ul className="flex">{children}</ul>
    </nav>
  );
}
