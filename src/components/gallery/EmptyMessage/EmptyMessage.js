import React from 'react';
import styles from './EmptyMessage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EmptyMessage = () => {
  return (
    <div className={cx('empty-message-wrapper')}>
      <img src={require('static/images/planet.svg')} alt='planet' />
      <span>your gallery is empty~ :(</span>
    </div>
  );
}

export default EmptyMessage;

