/* id 설정 */
let nextId = 3;

/* Action Value */
const ADD_TIL = "ADD_TIL";

/* Action Creator */
export const addTil = (title, content, clock) => {
  return {
    type: ADD_TIL,
    til: {
      id: nextId++,
      title: title,
      content: content,
      clock: clock,
    },
  };
};

/* Initial State */
const initialState = {
  tils: [
    {
      id: 1,
      title: "react",
      content: "redux study",
      clock: "5시간",
    },
    {
      id: 2,
      title: "til",
      content: "1day 1til",
      clock: "5시간",
    },
  ],
};

/* Reducer */
const til_list = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TIL:
      return {
        ...state,
        tils: state.tils.concat(action.til),
      };
    default:
      return state;
  }
};

/* export default reducer */
export default til_list;
