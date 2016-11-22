/* global $, document */
// Import Modules
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
const React = require('react'); // eslint-disable-line

// Import other shit
var store = require('configureStore').configure();
const actions = require('actions');

// Import Components
import Menu from 'app/components/Menu';
import IngredientesExtra from 'app/components/IngredientesExtra';
import Pagar from 'app/components/Pagar';
import Llamar from 'app/components/Llamar';
import Entregar from 'app/components/Entregar';
import App from 'app/components/App';

// set dummy informacion de estado
// store.dispatch(actions.setInfo());

store.subscribe(() => {
  var state = store.getState();
  console.log('(app.jsx) New state', state);
});

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Menu}/>
        <Route path="menu-jsx" component={Menu}/>
        <Route path="ingredientes-extra-jsx" component={IngredientesExtra}/>
        <Route path="pagar-jsx" component={Pagar}/>
        <Route path="llamar-jsx" component={Llamar}/>
        <Route path="entregar-jsx" component={Entregar}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
