import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { Root } from './models';
import { ModelInjector } from './components/ModelInjector';
import './style.css';

import { Counter } from './components/Counter';

const root = Root.create({});

const ConnectedCounter = () => (
  <ModelInjector>
    {(root) => <Counter model={root.counter}/>}
  </ModelInjector>
);

function App () {
  return (
    <Provider root={root}>
      <ConnectedCounter/>
    </Provider>
  );
}

render(<App />, document.getElementById('root'));
