import configure from './configure';
import type { Base } from './modules/base';
import type { Home } from './modules/home';

const store = configure();

export default store;

export type State = {
  base: Base,
  home: Home
};