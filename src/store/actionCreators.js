import { bindActionCreators } from 'redux';
import store from './index';
import { actionCreators as baseActions, type BaseActionCreators } from './modules/base';
import { actionCreators as homeActions, type HomeActionCreators } from './modules/home';

const { dispatch } = store;
export const BaseActions: BaseActionCreators = bindActionCreators(baseActions, dispatch);
export const HomeActions: HomeActionCreators = bindActionCreators(homeActions, dispatch);