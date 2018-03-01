import React, { type Node } from 'react';
import { Link } from 'react-router-dom';
import styles from './Drawer.scss';
import classNames from 'classnames/bind';
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

const cx = classNames.bind(styles);

type Props = {
  contents: Node,
  visible: boolean
}

const Drawer = ({contents, visible}: Props) => {
  return (
    <div className={cx('drawer-wrapper')}>
      <Sidebar.Pushable className={cx('sidebar')} >
        <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
          <Link to='/'>
            <Menu.Item name='home' className={cx('icons')}>
              <Icon name='home' />
              Home
            </Menu.Item>
          </Link>
          <Link to='/gallery'>
            <Menu.Item name='picture' className={cx('icons')}>
              <Icon name='picture' />
              My gallery
            </Menu.Item>
          </Link>
        </Sidebar>
        <Sidebar.Pusher>
          {contents}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default Drawer;