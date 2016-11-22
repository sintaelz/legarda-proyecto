const React = require('react');
const {hashHistory} = require('react-router');
const {connect} = require('react-redux');
const actions = require('actions');
var {Link} = require('react-router');
import Cadena from 'Cadena';

var Pagar = React.createClass({
  handleSubmit: function() {
    var {dispatch, cadena} = this.props;
    if (cadena.charAt(1) != 'a' && cadena.charAt(1) != 't' && cadena.charAt(0) == 'x') {
      dispatch(actions.updateInfo('a'));
    } else if (cadena.charAt(1) != 't' && cadena.charAt(1) != 'a' && cadena.charAt(0) == 'x') {
      dispatch(actions.updateInfo('t'));
    }
  },
  render: function() {
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
                <Link to ="llamar-jsx"><td className="expanded secondary button" onClick={() => this.handleSubmit()}>Pago con Tarjeta</td></Link>
              </tr>
              <tr>
                <td className="expanded secondary button" onClick={() => this.handleSubmit()}>Pago en Efectivo</td>
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
)(Pagar);
