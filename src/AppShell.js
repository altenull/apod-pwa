import React, { Component, type Node } from 'react';
import DimmerContainer from 'containers/common/DimmerContainer';
import APODModalContainer from 'containers/common/APODModalContainer';
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
        <DimmerContainer />
        <APODModalContainer />
        <DrawerContainer />
        <HeaderContainer />
        <div id='contents'>
          {children}
        </div>
      </div>
    );
  }
}

export default AppShell;