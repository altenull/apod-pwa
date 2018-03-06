import React, { Component } from 'react'
import { connect } from 'react-redux';
import type { State } from 'store';
import { BaseActions, GalleryActions } from 'store/actionCreators';
import { List } from 'immutable';
import IndexedDB from 'lib/IndexedDB';
import APODCard from 'components/gallery/APODCard';
import MasonryLayout from 'components/gallery/MasonryLayout';
import EmptyMessage from 'components/gallery/EmptyMessage';

type Props = {
  apodList: ?List
}

class APODCardContainer extends Component<Props> {
  handleClick = (date) => BaseActions.openAPODModal(date)

  handleRemove = async (date) => {
    const { apodList } = this.props;
    const removeIndex = apodList.toJS().findIndex(c => c.date === date);

    IndexedDB.removeAPOD(date);
    GalleryActions.removeAPOD(removeIndex);
  }

  render() {
    const { apodList } = this.props;
    const { handleClick, handleRemove } = this;

    if (!apodList) {
      return null;
    } else if (apodList.size === 0) {
      return (
        <EmptyMessage />
      );
    }

    const APODCardList = apodList.toJS().map((data, index) => {
      return (
        <APODCard
          key={index}
          date={data.date}
          title={data.title}
          url={data.url}
          onClick={handleClick}
          onRemove={handleRemove}
        />
      )
    })

    return (
      <MasonryLayout>
        {APODCardList}
      </MasonryLayout>
    )
  }
}

export default connect(
  ({ gallery }: State) => ({
    apodList: gallery.apodList
  }),
  () => ({})
)(APODCardContainer);