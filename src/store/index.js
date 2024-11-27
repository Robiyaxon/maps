import { createStore } from "redux";

const reducer = (state = { count: 0 }, action) => {
    if (action.type === "QOSHISH") {
        return { count: state.count + 1 };
    } else if (action.type === "AYRISH") {
        return { count: state.count - 1 };
    }
    return state;
};

const store = createStore(reducer);

export default store;
