import React from 'react'
import styles from './APODModal.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  date: string,
  explanation: string,
  title: string,
  url: string,
  open: boolean,
  onClick(): void
}

const APODModal = ({date, explanation, title, url, open, onClick}: Props) => {
  return (
    <div className={cx('apod-modal')} onClick={onClick}>
      <div className={cx('apod-dimmer')}></div>
      <div className={cx('apod-template')}>
        <img src={url} alt={title} />
        <div className={cx('apod-info')}>
          <div className={cx('apod-header')}>
            <span className={cx('title')}>
              {title}
            </span>
            <span className={cx('date')}>
              {date}
            </span>
          </div>
          <p onClick={(event) => event.stopPropagation()}>
            {explanation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default APODModal;