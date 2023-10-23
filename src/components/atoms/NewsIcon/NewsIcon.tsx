import React from 'react';

import clsx from 'clsx';

export interface NewsIconProps {
  className?: string;
  icon: 'アイコン' | 'アイコン１' | 'アイコン２';
}

const commonClassNames = 'text-white text-xs px-4 py-1';

export default function NewsIcon({ className, icon }: NewsIconProps) {
  if (icon === 'アイコン１')
    return (
      <span className={clsx(className, commonClassNames, 'bg-red-700')}>
        {icon}
      </span>
    );
  if (icon === 'アイコン２')
    return (
      <span className={clsx(className, commonClassNames, 'bg-blue-700')}>
        {icon}
      </span>
    );
  return (
    <span className={clsx(className, commonClassNames, 'bg-slate-400')}>
      {icon}
    </span>
  );
}
