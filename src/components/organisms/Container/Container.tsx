import React from 'react';

import clsx from 'clsx';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
  return <div className={clsx('p-[3%]', className)}>{children}</div>;
}
