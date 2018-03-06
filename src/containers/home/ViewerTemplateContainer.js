import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { HomeActions } from 'store/actionCreators';
import ViewerTemplate from 'components/home/ViewerTemplate';
import Spinner from 'components/common/Spinner';
import LikeButtonContainer from 'containers/home/LikeButtonContainer';

type Props = {
  isLoaded: boolean,
  apod: any
}

class ViewerTemplateContainer extends Component<Props> {
  componentDidMount() {
    this.getFirstAPOD();
  }

  getFirstAPOD = async () => {
    try {
      const response = await HomeActions.getAPOD();
      const { date } = response.data;
      HomeActions.setToday(date);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { isLoaded, apod } = this.props;

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
        likeButton={likeButton}
      />
    );
  }
}

export default connect(
  ({ home }: State) => ({
    isLoaded: home.isLoaded,
    apod: home.apod.toJS()
  }),
  () => ({})
)(ViewerTemplateContainer);