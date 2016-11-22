const React = require('react');
const {hashHistory} = require('react-router');
const {connect} = require('react-redux');
const actions = require('actions');
var {Link} = require('react-router');
import Cadena from 'Cadena';

var Pagar = React.createClass({
  handleSubmit: function() {
    var {dispatch} = this.props;
    dispatch(actions.updateInfo('a'));
  },
  handleSubmit2: function() {
    var {dispatch} = this.props;
    dispatch(actions.updateInfo('t'));
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
            <Link to ="llamar-jsx">
              <tr>
                <td className="expanded secondary button" onClick={() => this.handleSubmit2()}>Pago con Tarjeta</td>
              </tr>
            </Link>
            <Link to ="llamar-jsx">
              <tr>
                <td className="expanded secondary button" onClick={() => this.handleSubmit()}>Pago en Efectivo</td>
              </tr>
            </Link>
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
