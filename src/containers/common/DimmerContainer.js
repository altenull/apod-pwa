import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { BaseActions } from 'store/actionCreators';
import Dimmer from 'components/common/Dimmer';

type Props = {
  drawer: boolean
}

class DimmerContainer extends Component<Props> {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.drawer !== nextProps.drawer;
  }

  handleClick = () => {
    BaseActions.hideDrawer();
  }

  render() {
    const { drawer } = this.props;
    const { handleClick } = this;

    if (!drawer) {
      return null;
    }

    return (
      <Dimmer
        onClick={handleClick}
      />
    );
  }
}

export default connect(
  ({ base }: State) => ({
    drawer: base.drawer
  }),
  () => ({})
)(DimmerContainer);