import React, { ReactNode } from 'react';

interface HamburgerButtonProps {
  onClick?: () => void;
  isOpen?: boolean;
}

/**
 * ハンバーガーボタンのbuttonタグ。内部はchildrenで受け取る。(isOpenの状態に応じて、三本線 or ✗ を出し分ける）
 *
 * @param children
 * @param onClick
 * @constructor
 */
function Button({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="w-[46px] h-[46px] flex flex-col justify-between bg-black/50 rounded-full scale-[1.3] py-[15px] px-[13px]"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default function HamburgerButton({
  onClick,
  isOpen,
}: HamburgerButtonProps) {
  const commonClassName =
    'block transition-transform duration-300 border-t-2 border-t-solid border-t-white';
  if (isOpen) {
    return (
      <Button onClick={onClick}>
        <span
          className={`w-[20px] origin-center rotate-45 translate-x-0 translate-y-[7px] ${commonClassName}`}
        />
        <span className="hidden" />
        <span
          className={`w-[20px] origin-center -rotate-45 translate-x-0 translate-y-[-7px] ${commonClassName}`}
        />
      </Button>
    );
  }
  return (
    <Button onClick={onClick}>
      <span className={`w-full ${commonClassName}`} />
      <span className={`w-full ${commonClassName}`} />
      <span className={`w-full ${commonClassName}`} />
    </Button>
  );
}
