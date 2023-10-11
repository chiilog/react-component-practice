import React from 'react';

interface DrawerProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export default function Drawer({ isOpen = false, children }: DrawerProps) {
  const commonClassNames =
    'fixed top-0 w-full lg:w-3/4 h-full bg-black/90 z-10 pt-[100px] pb-[20px] px-[20px] transition-[left] duration-300 text-center';
  if (isOpen) {
    return <div className={`block left-0 ${commonClassNames}`}>{children}</div>;
  }
  return (
    <div className={`-left-full lg:-left-3/4 ${commonClassNames}`}>
      {children}
    </div>
  );
}
