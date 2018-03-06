import React, { Component } from 'react';
import styles from './APODCard.scss';
import classNames from 'classnames/bind';
import { Button, Icon, Image, Dimmer } from 'semantic-ui-react'

const cx = classNames.bind(styles);

type Props = {
  date: string,
  title: string,
  url: string,
  onClick(date): void,
  onRemove(date): void
}

class APODCard extends Component<Props> {
  state = {
    active: false
  }

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { date, title, url, onClick, onRemove } = this.props;
    const { active } = this.state;
    const { handleShow, handleHide } = this;
    
    const content = (
      <div className={cx('apod-picture-dimmer')}>
        <Button
          name={date}
          onClick={(e) => onClick(e.target.name)}
        >
          <Icon name='search' />More
        </Button>
      </div>
    )

    return (
      <div className={cx('card-container')}>
        <div className={cx('card-wrapper')}>
          <Dimmer.Dimmable
            as={Image}
            src={url}
            label={{
              color: 'black',
              content: `${date}`,
              icon: 'calendar',
              ribbon: true
            }}
            dimmed={active}
            dimmer={{ active, content }}
            onMouseEnter={handleShow}
            onMouseLeave={handleHide}
            className={cx('apoc-picture')}
          />
          <div className={cx('card-header')}>
            <div className={cx('title')}>
              {title}
            </div>
            <div className={cx('remove-button-wrapper')} onClick={() => onRemove(date)}>
              <i className={cx('remove-button', 'trash', 'icon')} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default APODCard;