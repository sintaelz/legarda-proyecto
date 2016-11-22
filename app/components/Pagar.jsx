const React = require('react');
const {hashHistory} = require('react-router');

var Pagar = React.createClass({
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
                <td className="expanded secondary button">Pago con Tarjeta</td>
              </tr>
              <tr>
                <td className="expanded secondary button">Pago en Efectivo</td>
              </tr>
            </tbody>
          </table>
          <text className="text-center">Estado:</text>
      </div>
    );
  }
});

module.exports = Pagar;
