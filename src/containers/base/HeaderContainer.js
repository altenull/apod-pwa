import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { BaseActions } from 'store/actionCreators';
import Header from 'components/base/Header';

type Props = {
  drawer: boolean
}

class HeaderContainer extends Component<Props> {
  handleDrawerToggle = (e) => {
    e && e.preventDefault();
    const { drawer } = this.props;

    if (!drawer) {
      BaseActions.showDrawer();
    } else {
      BaseActions.hideDrawer();
    }
  }

  render() {
    const { handleDrawerToggle } = this;

    return (
      <Header
        onClick={handleDrawerToggle}
      />
    );
  }
}

export default connect(
  ({ base }: State) => ({
    drawer: base.drawer
  }),
  () => ({})
)(HeaderContainer);