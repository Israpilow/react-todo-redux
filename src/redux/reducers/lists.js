const initialState = {
  lists: [],
  activeList: {},
};

const lists = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LISTS': {
      return {
        ...state,
        lists: action.payload,
      };
    }

    case 'SET_TASKS': {
      return {
        ...state,
        tasks: action.payload,
      };
    }

    case 'SET_ADD_LIST': {
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    }

    case 'SET_REMOVE_LIST': {
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload.id),
      };
    }

    case 'SET_ACTIVE_LIST': {
      return {
        ...state,
        activeList: action.payload,
      };
    }

    case 'SET_EDIT_LIST': {
      return {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id === action.payload.id) {
            list.name = action.payload.name;
          }
          return list;
        }),
      };
    }

    case 'SET_ADD_TASK': {
      return {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id === action.payload.listId) {
            list.tasks = [...list.tasks, action.payload];
          }
          return list;
        }),
      };
    }

    case 'SET_REMOVE_TASK': {
      return {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id === action.payload.listId) {
            list.tasks = list.tasks.filter((task) => task.id !== action.payload.id);
          }
          return list;
        }),
      };
    }

    case 'SET_EDIT_TASK': {
      return {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id === action.payload.listId) {
            list.tasks = list.tasks.map((task) => {
              if (task.id === action.payload.id) {
                task.text = action.payload.text;
              }
              return task;
            });
          }
          return list;
        }),
      };
    }

    default: {
      return state;
    }
  }
};

export default lists;
