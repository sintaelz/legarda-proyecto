const React = require('react');
const {hashHistory} = require('react-router');

var IngredientesExtra = React.createClass({
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
                <td className="expanded secondary button">Agregar Pico de Gallo</td>
                <td className="expanded secondary button">Agregar Salsa Verde</td>
              </tr>
              <tr>
                <td className="expanded secondary button">Agregar Salsa Roja</td>
                <td className="expanded secondary button">Agregar Queso Extra</td>
              </tr>
            </tbody>
          </table>
          <text className="text-center">Estado:</text>
      </div>
    );
  }
});

module.exports = IngredientesExtra;
