import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { HomeActions } from 'store/actionCreators';
import Viewer from 'components/home/Viewer';
import Spinner from 'components/common/Spinner';

type Props = {
  isLoaded: boolean,
  apod: any
}

class ViewerContainer extends Component<Props> {
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

    return (
      <Viewer
        date={apod.date}
        mediaType={apod.mediaType}
        title={apod.title}
        url={apod.url}
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
)(ViewerContainer);