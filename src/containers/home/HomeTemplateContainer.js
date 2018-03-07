import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { BaseActions, HomeActions } from 'store/actionCreators';
import HomeTemplate from 'components/home/HomeTemplate';
import CalendarNavigatorContainer from 'containers/home/CalendarNavigatorContainer';
import ViewerTemplateContainer from 'containers/home/ViewerTemplateContainer';

type Props = {
  isLoaded: boolean
}

class HomeTemplateContainer extends Component<Props> {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isLoaded === nextProps.isLoaded;
  }

  componentDidMount() {
    const { isLoaded } = this.props;

    if (!isLoaded) {
      this.getFirstAPOD();
    }
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

  handleClick = () => BaseActions.hideDrawer()

  render() {
    const { handleClick } = this;
    const viewer = <ViewerTemplateContainer />;
    const calendarNavigator = <CalendarNavigatorContainer />;

    return (
      <HomeTemplate
        viewer={viewer}
        calendarNavigator={calendarNavigator}
        onClick={handleClick}
      />
    );
  }
}

export default connect(
  ({ home }: State) => ({
    isLoaded: home.isLoaded
  }),
  () => ({})
)(HomeTemplateContainer);