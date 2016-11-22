const React = require('react');
var {Link} = require('react-router');
import Cadena from 'Cadena';

var Menu = React.createClass({
  render: function() {
    return (
      <div className="menu-jsx">
        <Link to="ingredientes-extra-jsx"><div className="menu-item-square">Agregar Ingredientes Extras</div></Link>
        <Link to="pagar-jsx"><div className="menu-item-square">Pagar</div></Link>
        <Cadena/>
      </div>
    );
  }
});

export default Menu;
