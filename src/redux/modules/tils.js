/* id 설정 */
let nextId = 3;

/* Action Value */
const ADD_TIL = "ADD_TIL";
const DELETE_TIL = "DELETE_TIL";
const EDIT_TIL = "EDIT_TIL";
const UPDATE_TIL = "UPDATE_TIL";

/* Action Creator */
export const addTil = (title, content, clock) => {
  return {
    type: ADD_TIL,
    til: {
      id: nextId++,
      title: title,
      content: content,
      clock: clock,
      isEdit: false,
    },
  };
};

export const deleteTil = (id) => {
  return {
    type: DELETE_TIL,
    id,
  };
};

export const editTil = (id) => {
  return {
    type: EDIT_TIL,
    id,
  };
};

export const updateTil = (id, title, content, clock) => {
  return {
    type: EDIT_TIL,
    id,
    title,
    content,
    clock,
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
      isEdit: false,
    },
    {
      id: 2,
      title: "til",
      content: "1day 1til",
      clock: "5시간",
      isEdit: false,
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
    case EDIT_TIL:
      return {
        ...state,
        tils: state.tils.map((til) =>
          til.id === action.id ? { ...til, isEdit: !til.isEdit } : til
        ),
      };
    case UPDATE_TIL:
      return {
        ...state,
        tils: state.tils.map((til) =>
          til.id === action.id
            ? {
                ...til,
                title: til.title,
                content: til.content,
                clock: til.clock,
              }
            : til
        ),
      };
    default:
      return state;
  }
};

/* export default reducer */
export default til_list;
