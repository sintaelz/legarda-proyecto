// SET DUMMY INFO
export var setInfo = () => {
  return {
    type: 'SET_INFO'
  };
};

export var updateInfo = (id, estado) => {
  return {
    type: 'UPDATE_INFO',
    id,
    estado
  };
};
