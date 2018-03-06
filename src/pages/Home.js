import React, { Component } from 'react';
import { BaseActions, HomeActions } from 'store/actionCreators';
import HomeTemplateContainer from 'containers/home/HomeTemplateContainer';
// TODO
// 네트워크 상태 Dimmer
// 네비게이션 왼쪽, 오른쪽
// 날짜 선택
// Save to My Gallery 기능.
// 
class Home extends Component {
  componentWillUnmount() {
    BaseActions.initializeBase();
    HomeActions.initializeHome();
  }

  render() {
    return (
      <HomeTemplateContainer />
    );
  }
}

export default Home;