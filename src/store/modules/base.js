import { createAction, handleActions } from 'redux-actions';
import { Record, type Map } from 'immutable';

// action types
const INITIALIZE_BASE = 'base/INITIALIZE_BASE';
const SHOW_DRAWER = 'base/SHOW_DRAWER';
const HIDE_DRAWER = 'base/HIDE_DRAWER';
const OPEN_MODAL = 'base/OPEN_MODAL';
const CLOSE_MODAL = 'base/CLOSE_MODAL';

export type BaseActionCreators = {
  initializeBase(): any,
  showDrawer(): any,
  hideDrawer(): any,
  openModal(): any,
  closeModal(): any
};

export const actionCreators = {
  initializeBase: createAction(INITIALIZE_BASE),
  showDrawer: createAction(SHOW_DRAWER),
  hideDrawer: createAction(HIDE_DRAWER),
  openModal: createAction(OPEN_MODAL),
  closeModal: createAction(CLOSE_MODAL)
};

export type Base = {
  drawer: boolean,
  modal: boolean
};

const BaseRecord = Record({
  drawer: false,
  modal: false
});

const initialState: Map<string, *> = BaseRecord();

export default handleActions({
  [INITIALIZE_BASE]: state => initialState,
  [SHOW_DRAWER]: state => state.set('drawer', true),
  [HIDE_DRAWER]: state => state.set('drawer', false),
  [OPEN_MODAL]: state => state.set('modal', true),
  [CLOSE_MODAL]: state => state.set('modal', false)
}, initialState);