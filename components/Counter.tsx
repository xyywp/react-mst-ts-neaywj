import React from 'react';
import { Instance } from 'mobx-state-tree';
import { observer } from 'mobx-react';
import { Counter as CounterModel } from '../models/Counter';

export interface IProps {
  model: Instance<typeof CounterModel>;
}

export const Counter = observer((props: IProps) => {
  const {model} = props;
  return (
    <div>
      <p>Count: {model.count}</p>
      <p>
        <button onClick={model.add}>Add</button>
        <button onClick={model.multiply}>Multiply</button>
        <button onClick={model.asyncMultiply}>Async Multiply</button>
      </p>
    </div>
  );
});
