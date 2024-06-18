import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './store/counter.js';


function App() {


const count = useSelector((state) => state.counter.count);
const numberOfClicks = useSelector((state) => state.counter.numberOfClicks);

const dispatch = useDispatch();
// OR
// const count = useSelector((state) => state.counter); then we can use {counter.count} in the jsx below


function handleDecrement(){
  dispatch(decrement(5));
}

function handleIncrement(){
  dispatch(increment(5));
}
  return (
    <>
    <h1>Redux Counter</h1>
    <h3>Current Count: ({numberOfClicks}): {count}</h3>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleIncrement}>Increment</button>
    </>
   
  )
}

export default App
