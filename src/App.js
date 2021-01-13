import { connect } from "react-redux";
import { decreaseCounter, increaseCounter } from "./redux/counterReducer";
import "./App.css";

function App({ count, increaseCounter, decreaseCounter }) {
  return (
    <div className="App">
      <div>Count: {count}</div>
      <button onClick={() => increaseCounter()}>Increase Count</button>
      <button onClick={() => decreaseCounter()}>Decrease Count</button>
    </div>
  );
}

export default connect(
  (state) => ({
    count: state.counter.count,
  }),
  (dispatch) => ({
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  })
)(App);
