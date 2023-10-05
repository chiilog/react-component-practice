import React from 'react';

import Link from 'next/link';

import {
  faCat,
  faCrow,
  faDog,
  faFish,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './HeaderNavLink.module.css';

interface HeaderNavLinkProps {
  href: string;
  type: 'dog' | 'cat' | 'other' | 'fish';
  description: string;
}

export default function HeaderNavLink({
  href,
  type,
  description,
}: HeaderNavLinkProps) {
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
    <Link href={href} className={styles.HeaderNavLink}>
      {iconName && (
        <div className={styles.HeaderNavLink__icon}>
          <FontAwesomeIcon icon={iconName} />
        </div>
      )}
      <div className={styles.HeaderNavLink__text}>
        <span className={styles.HeaderNavLink__label}>
          <span className={styles.HeaderNavLink__labelText}>{labelText}</span>
          を探す
        </span>
        <span className={styles.HeaderNavLink__description}>{description}</span>
      </div>
    </Link>
  );
}
