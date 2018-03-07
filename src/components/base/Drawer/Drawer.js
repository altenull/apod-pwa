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
    <Sidebar
      className={cx('drawer')}
      as={Menu}
      animation='overlay'
      size='large'
      visible={visible}
      icon='labeled'
      vertical
      inverted
    >
      <div className={cx('app-logo')}>
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
      <a
        href='https://github.com/altenull/apod-pwa'
        target="_blank"
        rel="noopener noreferrer"
        className={cx('github-button')}
      >
        <span>Made by altenull</span>
        <i className={cx('icon', 'github')} />
      </a>
    </Sidebar>
  );
}

export default Drawer;