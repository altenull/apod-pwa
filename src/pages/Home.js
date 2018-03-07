import React, { Component } from 'react';
import { BaseActions } from 'store/actionCreators';
import HomeTemplateContainer from 'containers/home/HomeTemplateContainer';

class Home extends Component {
  componentWillUnmount() {
    BaseActions.hideDrawer();
  }

  render() {
    return (
      <HomeTemplateContainer />
    );
  }
}

export default Home;