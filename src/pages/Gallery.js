import React, { Component } from 'react';
import { BaseActions } from 'store/actionCreators';
import GalleryTemplateContainer from 'containers/gallery/GalleryTemplateContainer';

class Gallery extends Component {
  componentWillUnmount() {
    BaseActions.hideDrawer();
  }

  render() {
    return (
      <GalleryTemplateContainer />
    );
  }
}

export default Gallery;