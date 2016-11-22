const React = require('react');
var {Link} = require('react-router');
const actions = require('actions');
import Cadena from 'Cadena';
const {connect} = require('react-redux');

var Menu = React.createClass({
  render: function() {
    var {dispatch} = this.props;
    return (
      <div className="menu-jsx">
        <Link to="ingredientes-extra-jsx"><div className="menu-item-square">Agregar Ingredientes Extras</div></Link>
        <Link to="pagar-jsx"><div className="menu-item-square">Pagar</div></Link>
        <Cadena/>
      </div>
    );
  }
});

export default connect()(Menu);
