import configure from './configure';
// import type { Header } from './modules/header';
// import type { Contents } from './modules/contents';

const store = configure();

export default store;

export type State = {
  // header: Header,
  // contents: Contents
};