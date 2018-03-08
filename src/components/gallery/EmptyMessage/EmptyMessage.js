import React from 'react';
import styles from './EmptyMessage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EmptyMessage = () => {
  return (
    <div className={cx('empty-message')}>
      <img src={require('static/images/planet.svg')} alt='planet' />
      <span>Your gallery is empty...</span>
    </div>
  );
}

export default EmptyMessage;

