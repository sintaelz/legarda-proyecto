import {initEstado} from 'app/actions/dummyInfo';

export var cadenaReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_INFO':
      return state + action.letra;
    default:
      return state;
  }
};
