const React = require('react');
var {Link} = require('react-router');

var Menu = React.createClass({
  render: function() {
    return (
      <div className="menu-jsx">
        <Link to="ingredientes-extra-jsx"><div className="menu-item-square">Agregar Ingredientes Extras</div></Link>
        <Link to="pagar-jsx"><div className="menu-item-square">Pagar</div></Link>
      </div>
    );
  }
});

module.exports = Menu;
