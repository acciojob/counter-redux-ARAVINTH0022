import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from '../redux/store';
import { increment, decrement } from '../redux/actions';
import '../styles/App.css';

const CounterComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => (state && typeof state.count === 'number' ? state.count : (typeof state === 'number' ? state : 0)));

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>{count}</h1>
      <button
        className="increment"
        onClick={() => dispatch(increment())}
        style={{ padding: '10px 20px', margin: '0 10px', fontSize: '1em', cursor: 'pointer' }}
      >
        increment
      </button>
      <button
        className="decrement"
        onClick={() => dispatch(decrement())}
        style={{ padding: '10px 20px', margin: '0 10px', fontSize: '1em', cursor: 'pointer' }}
      >
        decrement
      </button>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <div id="main">
        <CounterComponent />
      </div>
    </Provider>
  );
};

export default App;
export { CounterComponent };
