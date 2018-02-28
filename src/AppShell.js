import React, { Component, type Node } from 'react';
import HeaderContainer from 'containers/base/HeaderContainer';
import DrawerContainer from 'containers/base/DrawerContainer';

type Props = {
  children: Node
}

class AppShell extends Component<Props> {
  render() {
    const { children } = this.props;

    return (
      <div>
        <HeaderContainer />
        <DrawerContainer
          contents={children}
        />
      </div>
    );
  }
}

export default AppShell;