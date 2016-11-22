import {initEstado} from 'app/actions/dummyInfo';

export var estadoReducers = (state = {}, action) => {
  switch (action.type) {
    case 'SET_INFO':
      return initEstado;
    case 'UPDATE_INFO':
      return {
        [action.id]: {
          estado: action.estado
        }
      };
    default:
      return state;
  }
};
