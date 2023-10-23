import React from 'react';

interface HeadingProps {
  level: 'h2' | 'h3';
  children: React.ReactNode;
}
export default function Heading({ level = 'h2', children }: HeadingProps) {
  if (level === 'h2') {
    return (
      <h2 className="bg-primary text-white rounded-full py-3.5 px-8 text-lg lg:text-xl mb-8">
        {children}
      </h2>
    );
  }
  return (
    <h3 className="bg-neutral-100 text-neutral-600 rounded-full py-3.5 px-8 text-base lg:text-lg mb-8">
      {children}
    </h3>
  );
}
