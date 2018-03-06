import React, { Component } from 'react';
import { BaseActions } from 'store/actionCreators';
import HomeTemplate from 'components/home/HomeTemplate';
import CalendarNavigatorContainer from 'containers/home/CalendarNavigatorContainer';
import ViewerTemplateContainer from 'containers/home/ViewerTemplateContainer';

class HomeTemplateContainer extends Component {
  handleClick = () => BaseActions.hideDrawer()

  render() {
    const { handleClick } = this;
    const viewer = <ViewerTemplateContainer />;
    const dateNavigator = <CalendarNavigatorContainer />;

    return (
      <HomeTemplate
        viewer={viewer}
        dateNavigator={dateNavigator}
        onClick={handleClick}
      />
    );
  }
}

export default HomeTemplateContainer;