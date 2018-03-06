import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { BaseActions } from 'store/actionCreators';
import { List } from 'immutable';
import APODModal from 'components/common/APODModal';

type Props = {
  apodModal: boolean,
  apodDate: string,
  apod: any,
  apodList: ?List
}

class APODModalContainer extends Component<Props> {
  shouldComponentUpdate(nextProps, nextState) {
    const current = {
      apodModal: this.props.apodModal,
      apodDate: this.props.apodDate
    }

    const next = {
      apodModal: nextProps.apodModal,
      apodDate: nextProps.apodDate
    }

    return current !== next;
  }

  handleClick = () => {
    BaseActions.closeAPODModal();
  }

  render() {
    const { apodModal, apodDate, apod, apodList } = this.props;
    const { handleClick } = this;

    if (!apodModal) {
      return null;
    }

    if (!apodDate) {
      return (
        <APODModal
          date={apod.date}
          explanation={apod.explanation}
          title={apod.title}
          url={apod.url}
          open={apodModal}
          onClick={handleClick}
        />
      );
    } else {
      const findResult = apodList.toJS().find(c => c.date === apodDate)

      return (
        <APODModal
          date={apodDate}
          explanation={findResult.explanation}
          title={findResult.title}
          url={findResult.url}
          open={apodModal}
          onClick={handleClick}
        />
      );
    }
  }
}

export default connect(
  ({ base, home, gallery }: State) => ({
    apodModal: base.apodModal,
    apodDate: base.apodDate,
    apod: home.apod.toJS(),
    apodList: gallery.apodList
  }),
  () => ({})
)(APODModalContainer);