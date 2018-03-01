import React from 'react';
import styles from './Viewer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  date: string,
  mediaType: string,
  title : string,
  url: string
}

const Viewer = ({date, mediaType, title, url}: Props) => {
  return (
    <div className={cx('viewer')}>
      { (mediaType === 'image')
        ? (
            <div className={cx('photo')}>
              <img src={url} alt={title} />
              <div className={cx('glow-wrapper')}>
                <i className={cx('glow')} />
              </div>
            </div>
        )
        : <iframe src={url} title={title} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen />
      }
    </div>
  );
}

export default Viewer;