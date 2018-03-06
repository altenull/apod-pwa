import React, { Component } from 'react';
import { BaseActions } from 'store/actionCreators';
import GalleryTemplate from 'components/gallery/GalleryTemplate';
import APODCardContainer from 'containers/gallery/APODCardContainer';

class GalleryTemplateContainer extends Component {
  handleClick = () => {
    BaseActions.hideDrawer();
  }

  render() {
    const { handleClick } = this;
    const APODCardList = <APODCardContainer />;

    return (
      <GalleryTemplate
        onClick={handleClick}
        APODCardList={APODCardList}
      />
    );
  }
}

export default GalleryTemplateContainer;