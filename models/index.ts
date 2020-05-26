import { types } from 'mobx-state-tree';
import { Counter } from './Counter';

export const Root = types
  .model('Root', {
    counter: types.optional(Counter, {}),
  });