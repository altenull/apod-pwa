import React from 'react';
import styles from './Spinner.scss';
import classNames from 'classnames/bind';
import { Loader } from 'semantic-ui-react';

const cx = classNames.bind(styles);

const Spinner = () => {
  return (
    <div className={cx('spinner')}>
      <Loader active inverted content='Loading' />
    </div>
  );
}

export default Spinner;