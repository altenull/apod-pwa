import { createAction, handleActions } from 'redux-actions';
import { Record, List, fromJS, type Map } from 'immutable';

// action types
const INITIALIZE_GALLERY = 'gallery/INITIALIZE_GALLERY';
const SET_APODLIST = 'gallery/SET_APODLIST';
const ADD_APOD = 'gallery/ADD_APOD';
const REMOVE_APOD = 'gallery/REMOVE_APOD';

export type GalleryActionCreators = {
  initializeGallery(): any,
  setAPODList(findResult: List): any,
  addAPOD(newAPOD: object): any,
  removeAPOD(removeIndex: number): any
};

export const actionCreators = {
  initializeGallery: createAction(INITIALIZE_GALLERY),
  setAPODList: createAction(SET_APODLIST),
  addAPOD: createAction(ADD_APOD),
  removeAPOD: createAction(REMOVE_APOD)
};

export type Gallery = {
  apodList: ?List
};

const GalleryRecord = Record({
  apodList: null
});

const initialState: Map<string, *> = GalleryRecord();

export default handleActions({
  [INITIALIZE_GALLERY]: state => initialState,
  [SET_APODLIST]: (state, { payload: findResult }) => state.set('apodList', fromJS(findResult)),
  [ADD_APOD]: (state, { payload: newAPOD }) => state.set('apodList', state.get('apodList').concat(fromJS(newAPOD))),
  [REMOVE_APOD]: (state, { payload: removeIndex }) => state.set('apodList', state.get('apodList').delete(removeIndex))
}, initialState);