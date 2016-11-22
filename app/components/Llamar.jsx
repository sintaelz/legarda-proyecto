const React = require('react');
const {hashHistory} = require('react-router');
const {connect} = require('react-redux');
const actions = require('actions');
var {Link} = require('react-router');
import Cadena from 'Cadena';

var Llamar = React.createClass({
  handleSubmit: function() {
    var {dispatch, cadena} = this.props;
    dispatch(actions.updateInfo('b'));
  },
  render: function() {
    return (
      <div className="llamar-jsx">
        <button onClick={hashHistory.goBack} className="button large">Atrás</button>
          <table>
            <thead>
              <tr>
                <th colSpan="1" className="table-title">Llamar al Cliente</th>
              </tr>
              <tr>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Link to ="entregar-jsx"><td className="expanded success button" onClick={() => this.handleSubmit()}>Llamar al Cliente</td></Link>
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
)(Llamar);
