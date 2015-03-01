/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    Home = require('./components/home.js'),
    Wrapper = require('./components/wrapper.js');

module.exports = (
    <Route handler={Wrapper}>
        <Route name="home" path="/" handler={Home} />
    </Route>
);