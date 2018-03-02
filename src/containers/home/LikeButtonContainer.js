import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { GalleryActions } from 'store/actionCreators';
import { List } from 'immutable';
import LikeButton from 'components/home/LikeButton';
import IndexedDB from 'lib/IndexedDB';

type Props = {
  apod: any,
  apodList: ?List
}

class LikeButtonContainer extends Component<Props> {
  handleRate = () => {
    const { apod, apodList } = this.props;
    const isPressed = apodList.toJS().find(c => c.date === apod.date);
    
    if (isPressed) {
      console.log('should be removed in IndexedDB and Store');
    } else {
      IndexedDB.saveAPOD(apod);

      const newAPOD = [{
        date: apod.date,
        mediaType: apod.mediaType,
        title: apod.title,
        url: apod.url
      }];

      GalleryActions.addAPOD(newAPOD);
    }
  }

  render() {
    console.log('LikeButtonContainer 랜더링');
    const { apod, apodList } = this.props;
    const { handleRate } = this;

    if (!apodList) {
      return null;
    }

    const isPressed = apodList.toJS().find(c => c.date === apod.date);

    return (
      <LikeButton
        onRate={handleRate}
        isPressed={isPressed}
      />
    );
  }
}

export default connect(
  ({ home, gallery }: State) => ({
    apod: home.apod.toJS(),
    apodList: gallery.apodList
  }),
  () => ({})
)(LikeButtonContainer);