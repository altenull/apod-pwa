import React, { Component, type Node } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import Drawer from 'components/base/Drawer';

type Props = {
  contents: Node,
  drawer: boolean
}

class DrawerContainer extends Component<Props> {
  render() {
    const { contents, drawer } = this.props;

    return (
      <Drawer
        contents={contents}
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