import React, { type Node } from 'react';
import styles from './ViewerTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  date: string,
  mediaType: string,
  title : string,
  url: string,
  onClick(): void,
  likeButton: Node
}

const ViewerTemplate = ({date, mediaType, title, url, onClick, likeButton}: Props) => {
  return (
    <div className={cx('viewer-container')}>
      { (mediaType === 'image')
        ? (
          <div className={cx('viewer')}>
            <div className={cx('header')}>
              <span className={cx('title')}>{title}</span>
              {likeButton}
            </div>
            <img src={url} alt={title} onClick={onClick}/>
          </div>
        )
        : <iframe
            src={url}
            title={title}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
          />
      }
    </div>
  );
}

export default ViewerTemplate;