import React from 'react';

interface NewsListProps {
  children: React.ReactNode;
}

export default function NewsList({ children }: NewsListProps) {
  return <dl className="my-6 flex flex-col gap-3">{children}</dl>;
}
