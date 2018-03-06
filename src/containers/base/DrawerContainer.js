import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import Drawer from 'components/base/Drawer';

type Props = {
  drawer: boolean
}

class DrawerContainer extends Component<Props> {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.drawer !== nextProps.drawer;
  }

  render() {
    const { drawer } = this.props;

    return (
      <Drawer
        visible={drawer}
      />
    );
  }
}

export default connect(
  ({ base }: State) => ({
    drawer: base.drawer
  }),
  () => ({})
)(DrawerContainer);