// SET DUMMY INFO
export var setInfo = () => {
  return {
    type: 'SET_INFO'
  };
};

export var updateInfo = (letra) => {
  return {
    type: 'UPDATE_INFO',
    letra
  };
};

export var deleteInfo = () => {
  return {
    type: 'DELETE_INFO'
  };
};
