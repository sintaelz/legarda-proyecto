const React = require('react');
const {hashHistory} = require('react-router');
const {connect} = require('react-redux');
const actions = require('actions');

var IngredientesExtra = React.createClass({
  render: function() {
    var {states, dispatch} = this.props;
    var arrayState = [];
    for (var estado in states) { // eslint-disable-line
      arrayState.push(estado);
    }
    var printRows = () => {
      return arrayState.map(estado => { // eslint-disable-line
          return (
            <tr key={estado}>
              <td>
                Estado actual del pedido: {states[estado].estado}
              </td>
            </tr>
          );
      });
    };
    return (
      <div className="ingredientes-extra-jsx">
        <button onClick={hashHistory.goBack} className="button large">Atrás</button>
          <table>
            <thead>
              <tr>
                <th colSpan="1" className="table-title">Ingredientes a agregar</th>
              </tr>
              <tr>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="expanded secondary button" onClick={() =>
                    dispatch(actions.updateInfo(1, 'i'))
                  }>Agregar Pico de Gallo</td>
              </tr>
              <tr>
                <td className="expanded secondary button" onClick={() =>
                    dispatch(actions.updateInfo(1, 'i'))
                  }>Agregar Salsa Verde</td>
              </tr>
              <tr>
                <td className="expanded secondary button" onClick={() =>
                    dispatch(actions.updateInfo(1, 'i'))
                  }>Agregar Salsa Roja</td>
              </tr>
              <tr>
                <td className="expanded secondary button" onClick={() =>
                    dispatch(actions.updateInfo(1, 'i'))
                  }>Agregar Queso Extra</td>
              </tr>
                {printRows()}
            </tbody>
          </table>
      </div>
    );
  }
});

export default connect(
  state => {
    return {
      states: state.ingredientesExtra
    };
  }
)(IngredientesExtra);
