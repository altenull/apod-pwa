import { bindActionCreators } from 'redux';
import store from './index';
import { actionCreators as baseActions, type BaseActionCreators } from './modules/base';

const { dispatch } = store;
export const BaseActions: BaseActionCreators = bindActionCreators(baseActions, dispatch);