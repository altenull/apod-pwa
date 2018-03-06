import { bindActionCreators } from 'redux';
import store from './index';
import { actionCreators as baseActions, type BaseActionCreators } from './modules/base';
import { actionCreators as homeActions, type HomeActionCreators } from './modules/home';
import { actionCreators as galleryActions, type GalleryActionCreators } from './modules/gallery';

const { dispatch } = store;
export const BaseActions: BaseActionCreators = bindActionCreators(baseActions, dispatch);
export const HomeActions: HomeActionCreators = bindActionCreators(homeActions, dispatch);
export const GalleryActions: GalleryActionCreators = bindActionCreators(galleryActions, dispatch);