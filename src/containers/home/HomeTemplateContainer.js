import React, { Component } from 'react';
import HomeTemplate from 'components/home/HomeTemplate';
import CalendarNavigatorContainer from 'containers/home/CalendarNavigatorContainer';
import ViewerContainer from 'containers/home/ViewerContainer';

class HomeTemplateContainer extends Component {
  render() {
    const viewer = <ViewerContainer />;
    const dateNavigator = <CalendarNavigatorContainer />;

    return (
      <HomeTemplate
        viewer={viewer}
        dateNavigator={dateNavigator}
      />
    );
  }
}

export default HomeTemplateContainer;