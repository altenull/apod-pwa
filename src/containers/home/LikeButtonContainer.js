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
  handleLike = async () => {
    const { apod, apodList } = this.props;
    const isPressed = apodList.toJS().find(c => c.date === apod.date);

    if (isPressed) {
      const removeIndex = apodList.toJS().findIndex(c => c.date === apod.date);

      IndexedDB.removeAPOD(apod.date);
      GalleryActions.removeAPOD(removeIndex);
    } else {
      IndexedDB.addAPOD(apod);
      const newAPOD = [{
        date: apod.date,
        explanation: apod.explanation,
        mediaType: apod.mediaType,
        title: apod.title,
        url: apod.url
      }];
      GalleryActions.addAPOD(newAPOD);
    }
  }

  render() {
    const { apod, apodList } = this.props;
    const { handleLike } = this;

    if (!apodList) {
      return null;
    }

    const isPressed = apodList.toJS().find(c => c.date === apod.date);

    return (
      <LikeButton
        onLike={handleLike}
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