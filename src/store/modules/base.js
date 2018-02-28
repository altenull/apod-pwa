import { createAction, handleActions } from 'redux-actions';
import { Record, type Map } from 'immutable';

// action types
const INITIALIZE_BASE = 'base/INITIALIZE_BASE';
const SHOW_DRAWER = 'base/SHOW_DRAWER';
const HIDE_DRAWER = 'base/HIDE_DRAWER';

export type BaseActionCreators = {
  initializeHeader(): any,
  showDrawer(): any,
  hideDrawer(): any
};

export const actionCreators = {
  initializeHeader: createAction(INITIALIZE_BASE),
  showDrawer: createAction(SHOW_DRAWER),
  hideDrawer: createAction(HIDE_DRAWER)
};

export type Base = {
  drawer: boolean
};

const BaseRecord = Record({
  drawer: false
});

const initialState: Map<string, *> = BaseRecord();

export default handleActions({
  [INITIALIZE_BASE]: state => initialState,
  [SHOW_DRAWER]: state => state.set('drawer', true),
  [HIDE_DRAWER]: state => state.set('drawer', false),
}, initialState);