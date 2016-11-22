const React = require('react');
const {hashHistory} = require('react-router');
const {connect} = require('react-redux');
const actions = require('actions');
import Cadena from 'Cadena';

var IngredientesExtra = React.createClass({
  handleSubmit: function() {
    var {dispatch, cadena} = this.props;
    if (cadena.charAt(0) != 'x') {
      dispatch(actions.updateInfo('x'));
    }
  },
  render: function() {
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
                <td className="expanded secondary button" onClick={() => this.handleSubmit()}>Agregar Pico de Gallo</td>
              </tr>
              <tr>
                <td className="expanded secondary button" onClick={() => this.handleSubmit()}>Agregar Salsa Verde</td>
              </tr>
              <tr>
                <td className="expanded secondary button" onClick={() => this.handleSubmit()}>Agregar Salsa Roja</td>
              </tr>
              <tr>
                <td className="expanded secondary button" onClick={() => this.handleSubmit()}>Agregar Queso Extra</td>
              </tr>
              <tr>
                <Cadena/>
              </tr>
            </tbody>
          </table>
      </div>
    );
  }
});

export default connect(
  state => {
    return {
      cadena: state.cadena
    };
  }
)(IngredientesExtra);
