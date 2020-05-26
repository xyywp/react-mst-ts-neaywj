import { types, flow } from 'mobx-state-tree';
import { delay } from '../utils';

export const Counter = types
  .model('Counter', {
    count: types.optional(types.number, 0)
  })
  .actions(self => ({
    add () {
      self.count++;
    },
    multiply () {
      self.count *= 2;
    }
  }))
  .actions(self => {
    const asyncMultiply = flow(function * () {
      yield delay(1000);
      self.multiply();
    });

    return {
      asyncMultiply
    };
  });
  