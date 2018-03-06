import React, { Component } from 'react';
import { BaseActions } from 'store/actionCreators';
import GalleryTemplateContainer from 'containers/gallery/GalleryTemplateContainer';

// Masonry Layout 사용.
class Gallery extends Component {
  componentWillUnmount() {
    BaseActions.initializeBase();
    
  }

  render() {
    return (
      <GalleryTemplateContainer />
    );
  }
}

export default Gallery;