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
      <div className={cx('sidebar-icon')} onClick={onClick}>
        <i className="small link bars icon" />
      </div>
      <span>
        Astronomy Picture Of the Day
      </span>
    </div>
  );
}

export default Header;