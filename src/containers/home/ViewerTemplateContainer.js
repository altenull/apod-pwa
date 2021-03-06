import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { BaseActions } from 'store/actionCreators';
import ViewerTemplate from 'components/home/ViewerTemplate';
import Spinner from 'components/common/Spinner';
import LikeButtonContainer from 'containers/home/LikeButtonContainer';

type Props = {
  isLoaded: boolean,
  apod: any
}

class ViewerTemplateContainer extends Component<Props> {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isLoaded !== nextProps.isLoaded;
  }

  handleClick = () => BaseActions.openAPODModal()

  render() {
    const { isLoaded, apod } = this.props;
    const { handleClick } = this;

    if (!isLoaded) {
      return (
        <Spinner />
      );
    }

    const likeButton = <LikeButtonContainer />;

    return (
      <ViewerTemplate
        date={apod.date}
        mediaType={apod.mediaType}
        title={apod.title}
        url={apod.url}
        onClick={handleClick}
        likeButton={likeButton}
      />
    );
  }
}

export default connect(
  ({ base, home }: State) => ({
    isLoaded: home.isLoaded,
    apod: home.apod.toJS()
  }),
  () => ({})
)(ViewerTemplateContainer);