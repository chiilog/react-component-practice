import React from 'react';

import NewsIcon, { NewsIconProps } from '@/components/atoms/NewsIcon/NewsIcon';

interface NewsListItemProps {
  date: string;
  children: React.ReactNode;
  icon?: NewsIconProps['icon'];
}

export default function NewsListItem({
  date,
  children,
  icon,
}: NewsListItemProps) {
  return (
    <div className="flex gap-2.5">
      <dt className="basis-auto flex gap-2.5 shrink-0 items-baseline">
        <span className="shrink-0">{date}</span>
        {icon && <NewsIcon icon={icon} className="shrink-0 max-sm:hidden" />}
      </dt>
      <dd className="basis-4/5 leading-loose ml-auto">{children}</dd>
    </div>
  );
}
