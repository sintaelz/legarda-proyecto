// Import modules
const React = require('react');
const {connect} = require('react-redux');

var connectExample = React.createClass({
  render: function() {
    var {variable} = this.props;
    return (
      <div>
        <p>{variable}</p>
      </div>
    );
  }
});

export default connect(
  state => {
    return {
      variable: state.variable
    };
  }
)(connectExample);
