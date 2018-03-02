import React from 'react';
import styles from './Dimmer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  onClick(): void
}

const Dimmer = ({onClick}: Props) => {
  return (
    <div className={cx('dimmer')} onClick={onClick} />
  );
}

export default Dimmer;