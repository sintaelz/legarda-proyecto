import {initEstado} from 'app/actions/dummyInfo';

export var cadenaReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_INFO':
      return state + action.letra;
    case 'DELETE_INFO':
      return '';
    default:
      return state;
  }
};
