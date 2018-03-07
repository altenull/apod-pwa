import React, { type Node } from 'react';
import styles from './HomeTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  viewer: Node,
  calendarNavigator: Node,
  onClick(): void
}

const HomeTemplate = ({viewer, calendarNavigator, onClick}: Props) => {
  return (
    <div className={cx('home-template')} onClick={onClick}>
      <div className={cx('viewer')}>
        {viewer}
      </div>
      <div className={cx('calendar-navigator')}>
        {calendarNavigator}
      </div>
    </div>
  );
}

export default HomeTemplate;