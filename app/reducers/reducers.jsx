import {initEstado} from 'app/actions/dummyInfo';

export var estadoReducers = (state = {}, action) => {
  switch (action.type) {
    case 'SET_INFO':
      return initEstado;
    default:
      return state;
  }
};
