import React from 'react';

import clsx from 'clsx';

interface CautionTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function CautionText({ children, className }: CautionTextProps) {
  return (
    <strong className={clsx(className, 'text-red-600 font-medium')}>
      {children}
    </strong>
  );
}
