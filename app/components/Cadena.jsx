const React = require('react');
const {connect} = require('react-redux');

var Cadena = React.createClass({
  render: function() {
    var {cadena} = this.props;
    return (
      <div>
        Estado Actual del Pedido de Mollete: {cadena}
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
)(Cadena);
