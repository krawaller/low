/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    Interface = require('./components/interface'),
    Home = require('./components/home'),
    Armies = require('./components/armies'),
    Army = require('./components/army'),
    Wrapper = require('./components/wrapper'),
    MultiRoute = require('./components/multiroute');

module.exports = (
    <Route handler={Wrapper}>
        <Route name="home" path="/" handler={Home} />
        <Route name="statistics" path="/statistics" handler={Interface} />
        <Route name="armysel" path="/armies" handler={MultiRoute}>
        	<Route name="army" path="/armies/:armyname" handler={Army} />
        	<DefaultRoute handler={Armies} />
        </Route>
    </Route>
);