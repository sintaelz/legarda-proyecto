const React = require('react');
const {hashHistory} = require('react-router');
const {connect} = require('react-redux');
const actions = require('actions');

var Pagar = React.createClass({
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
      <div className="pagar-jsx">
        <button onClick={hashHistory.goBack} className="button large">Atrás</button>
          <table>
            <thead>
              <tr>
                <th colSpan="1" className="table-title">Modo de pago que se Desea Hacer</th>
              </tr>
              <tr>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="expanded secondary button" onClick={() =>
                    dispatch(actions.updateInfo(1, [states].estado + 't'))
                  }>Pago con Tarjeta</td>
              </tr>
              <tr>
                <td className="expanded secondary button" onClick={() =>
                    dispatch(actions.updateInfo(1, [states].estado + 'e'))
                  }>Pago en Efectivo</td>
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
)(Pagar);
