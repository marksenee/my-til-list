/* id 설정 */
let nextId = 3;

/* Action Value */
const ADD_TIL = "ADD_TIL";
const DELETE_TIL = "DELETE_TIL";

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

export const deleteTil = (id) => {
  return {
    type: DELETE_TIL,
    id,
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
    case DELETE_TIL:
      return {
        ...state,
        tils: state.tils.filter((til) => til.id !== action.id),
      };
    default:
      return state;
  }
};

/* export default reducer */
export default til_list;
