import React, { type Node } from 'react';
import styles from './HomeTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  viewer: Node,
  dateNavigator: Node
}

const HomeTemplate = ({viewer, dateNavigator}: Props) => {
  return (
    <div className={cx('home-template')}>
      <div className={cx('viewer-wrapper')}>
        {viewer}
      </div>
      <div className={cx('date-navigator')}>
        {dateNavigator}
      </div>
    </div>
  );
}

export default HomeTemplate;