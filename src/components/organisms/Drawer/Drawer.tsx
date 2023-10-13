import React from 'react';

import clsx from 'clsx';

interface DrawerProps {
  id: string;
  isOpen: boolean;
  children: React.ReactNode;
}

export default function Drawer({ id, isOpen = false, children }: DrawerProps) {
  return (
    <div
      id={id}
      className={clsx(
        isOpen ? 'block left-0' : '-left-full lg:-left-3/4',
        `fixed top-0 w-full lg:w-3/4 h-full bg-black/90 z-10 pt-[100px] pb-[20px] px-[20px] transition-[left] duration-300 text-center`,
      )}
      aria-hidden={!isOpen}
    >
      {children}
    </div>
  );
}
