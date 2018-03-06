import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Drawer.scss';
import classNames from 'classnames/bind';
import { Sidebar, Menu } from 'semantic-ui-react'

const cx = classNames.bind(styles);

type Props = {
  visible: boolean
}

const Drawer = ({visible}: Props) => {
  return (
    <div className={cx('drawer-wrapper')}>
      <Sidebar
        className={cx('sidebar')}
        as={Menu}
        animation='overlay'
        size='large'
        visible={visible}
        icon='labeled'
        vertical
        inverted
      >
        <div className={cx('logo')}>
          <img src={require('static/images/planet.svg')} alt='planet' />
          <span className={cx('title')}>APOD</span>
        </div>
        <Link to='/'>
          <div className={cx('menu-button')}>
            <i className={cx('icon', 'home')} />
            <span>Home</span>
          </div>
        </Link>
        <Link to='/gallery'>
          <div className={cx('menu-button')}>
            <i className={cx('icon', 'picture')} />
            <span>My gallery</span>
          </div>
        </Link>
      </Sidebar>
    </div>
  );
}

export default Drawer;