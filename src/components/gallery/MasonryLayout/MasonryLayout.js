import React, { type Node } from 'react';
import styles from './MasonryLayout.scss';
import classNames from 'classnames/bind';
import Masonry from 'react-masonry-component';

const cx = classNames.bind(styles);

type Props = {
  children: Node
}

const MasonryLayout = ({children}: Props) => {
  return (
    <Masonry className={cx('masonry-layout')}>
      {children}
    </Masonry>
  );
}

export default MasonryLayout;