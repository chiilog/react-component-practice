import React from 'react';

import Link from 'next/link';

import {
  faCat,
  faCrow,
  faDog,
  faFish,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

export interface AnimalIconNavListItemProps {
  href: string;
  type: 'dog' | 'cat' | 'other' | 'fish';
  description: string;
  hasBackground?: boolean;
}

export default function AnimalIconNavListItem({
  href,
  type,
  description,
  hasBackground = true,
}: AnimalIconNavListItemProps) {
  /**
   * typeに応じてアイコンを設定する
   */
  let iconName;
  if (type === 'dog') {
    iconName = faDog;
  } else if (type === 'cat') {
    iconName = faCat;
  } else if (type === 'other') {
    iconName = faCrow;
  } else if (type === 'fish') {
    iconName = faFish;
  }

  /**
   * typeに応じてラベルを設定する
   */
  let labelText;
  if (type === 'dog') {
    labelText = '子犬';
  } else if (type === 'cat') {
    labelText = '子猫';
  } else if (type === 'other') {
    labelText = '小動物';
  } else if (type === 'fish') {
    labelText = 'お魚';
  }

  return (
    <li className="flex-1">
      <Link
        href={href}
        className={clsx(
          'group text-white flex items-center gap-3 p-4 transition-colors duration-300',
          hasBackground && 'bg-black/50 hover:bg-black/80',
        )}
      >
        {iconName && (
          <div className="group-hover:scale-110 transition-transform duration-300 bg-primary basis-12 rounded-full text-2xl shrink-0 flex items-center justify-center w-12 h-12">
            <FontAwesomeIcon icon={iconName} />
          </div>
        )}
        <div className="basis-full">
          <span className="block border-b border-white border-dotted pb-1.5 mb-1.5">
            <span className="text-primary text-xl lg:text-2xl mr-1">
              {labelText}
            </span>
            を探す
          </span>
          <span className="block text-xs tracking-widest">{description}</span>
        </div>
      </Link>
    </li>
  );
}
