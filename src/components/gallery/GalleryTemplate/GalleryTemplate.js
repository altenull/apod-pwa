import React, { type Node } from 'react';
import styles from './GalleryTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  onClick(): void,
  APODCardList: Node
}

const GalleryTemplate = ({onClick, APODCardList}: Props) => {
  return (
    <div className={cx('gallery-template')} onClick={onClick}>
      {APODCardList}
    </div>
  );
}

export default GalleryTemplate;