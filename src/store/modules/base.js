import { createAction, handleActions } from 'redux-actions';
import { Record, type Map } from 'immutable';

// action types
const INITIALIZE_BASE = 'base/INITIALIZE_BASE';
const SHOW_DRAWER = 'base/SHOW_DRAWER';
const HIDE_DRAWER = 'base/HIDE_DRAWER';
const OPEN_APOD_MODAL = 'base/OPEN_APOD_MODAL';
const CLOSE_APOD_MODAL = 'base/CLOSE_APOD_MODAL';
const CHANGE_NETWORK_STATUS = 'base/CHANGE_NETWORK_STATUS';

export type BaseActionCreators = {
  initializeBase(): any,
  showDrawer(): any,
  hideDrawer(): any,
  openAPODModal(date: ?string): any,
  closeAPODModal(): any,
  changeNetworkStatus(onLine: boolean): any
};

export const actionCreators = {
  initializeBase: createAction(INITIALIZE_BASE),
  showDrawer: createAction(SHOW_DRAWER),
  hideDrawer: createAction(HIDE_DRAWER),
  openAPODModal: createAction(OPEN_APOD_MODAL),
  closeAPODModal: createAction(CLOSE_APOD_MODAL),
  changeNetworkStatus: createAction(CHANGE_NETWORK_STATUS)
};

export type Base = {
  drawer: boolean,
  apodModal: boolean,
  apodDate: ?string,
  onLine: boolean
};

const BaseRecord = Record({
  drawer: false,
  apodModal: false,
  apodDate: null,
  onLine: true
});

const initialState: Map<string, *> = BaseRecord();

export default handleActions({
  [INITIALIZE_BASE]: state => initialState,
  [SHOW_DRAWER]: state => state.set('drawer', true),
  [HIDE_DRAWER]: state => state.set('drawer', false),
  [OPEN_APOD_MODAL]: (state, { payload: date }) => {
    if (!date) {
      return state.set('apodModal', true);
    } else {
      return state.set('apodModal', true).set('apodDate', date);
    }
  },
  [CLOSE_APOD_MODAL]: state => state.set('apodModal', false).set('apodDate', null),
  [CHANGE_NETWORK_STATUS]: (state, { payload: onLine }) => state.set('onLine', onLine)
}, initialState);