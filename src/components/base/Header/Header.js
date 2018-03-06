import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  onClick(): void
}

const Header = ({onClick}: Props) => {
  return (
    <div className={cx('header-wrapper')}>
      <div className={cx('drawer-button-wrapper')} onClick={onClick}>
        <i className={cx('drawer-button', 'small', 'bars', 'icon')} />
      </div>
      <span>
        Astronomy Picture Of the Day
      </span>
    </div>
  );
}

export default Header;