import { createAction, handleActions } from 'redux-actions';
import { Record, fromJS, type Map } from 'immutable';
import { pender } from 'redux-pender';
import * as API from 'lib/api';

// action types
const INITIALIZE_HOME = 'home/INITIALIZE_HOME';
const GET_APOD = 'home/GET_APOD';
const SET_TODAY = 'home/SET_TODAY';

export type HomeActionCreators = {
  initializeHome(): any,
  getAPOD(date: string): any,
  setToday(date: string): any
};

export const actionCreators = {
  initializeHome: createAction(INITIALIZE_HOME),
  getAPOD: createAction(GET_APOD, API.getAPOD),
  setToday: createAction(SET_TODAY)
};

type APOD = {
  date: string,
  mediaType: string,
  title: string,
  url: string
}

export type Home = {
  isLoaded: boolean,
  today: string,
  apod: APOD
};

const APODSubrecord = Record({
  date: '',
  mediaType: '',
  title: '',
  url: ''
});

const HomeRecord = Record({
  isLoaded: false,
  today: '',
  apod: APODSubrecord()
});

const initialState: Map<string, *> = HomeRecord();

export default handleActions({
  [INITIALIZE_HOME]: state => initialState,
  ...pender({
    type: GET_APOD,
    onPending: state => state.set('isLoaded', false),
    onSuccess: (state, { payload: response }) => {
      const { date, media_type, title, url } = response.data;
      const apod = {
        'date': date,
        'mediaType': media_type,
        'title': title,
        'url': url
      }
      return state.set('apod', fromJS(apod)).set('isLoaded', true);
    },
  }),
  [SET_TODAY]: (state, { payload: date }) => state.set('today', date)
}, initialState);