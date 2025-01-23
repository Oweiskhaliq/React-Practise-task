const CounterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
      break;

    case "DECREMENT":
      return state - 1;
      break;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

export default CounterReducer;
