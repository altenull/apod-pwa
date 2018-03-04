import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { BaseActions } from 'store/actionCreators';
import APODModal from 'components/common/APODModal';

type Props = {
  modal: boolean,
  apod: any
}

class APODModalContainer extends Component<Props> {
  handleClick = () => {
    BaseActions.closeModal();
  }

  render() {
    const { modal, apod } = this.props;
    const { handleClick } = this;

    if (!modal) {
      return null;
    }

    return (
      <APODModal
        date={apod.date}
        explanation={apod.explanation}
        title={apod.title}
        url={apod.url}
        open={modal}
        onClick={handleClick}
      />
    );
  }
}

export default connect(
  ({ base, home }: State) => ({
    modal: base.modal,
    apod: home.apod.toJS()
  }),
  () => ({})
)(APODModalContainer);