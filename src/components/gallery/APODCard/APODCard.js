import React from 'react';
import styles from './APODCard.scss';
import classNames from 'classnames/bind';
import { Image } from 'semantic-ui-react'

const cx = classNames.bind(styles);

type Props = {
  date: string,
  title: string,
  url: string,
  onClick(date): void,
  onRemove(date): void
}

const APODCard = ({date, title, url, onClick, onRemove}: Props) => {
  return (
    <div className={cx('card-wrapper')}>
      <div className={cx('card-container')}>
        <Image
          src={url}
          alt={title}
          label={{
            color: 'black',
            content: `${date}`,
            icon: 'calendar',
            ribbon: true
          }}
          className={cx('apod-picture')}
          onClick={() => onClick(date)}
        />
        <div className={cx('card-header')}>
          <span className={cx('title')}>
            {title}
          </span>
          <div className={cx('remove-button-wrapper')} onClick={() => onRemove(date)}>
            <i className={cx('remove-button', 'trash', 'icon')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default APODCard;