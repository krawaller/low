/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Interface = require('./interface');

var Home = React.createClass({
    render: function() {
        return (
        	<div>
                <p className='logo'><img src='./img/logo.png'/></p>
            	<p className='instruction'>
Welcome to the <a href='http://lords-of-war.com'>Lords of War</a> player aid tool! Here you can see <strong>statistics</strong> for all units or subsets of units, and/or <strong>create mercenary decks</strong> and see stats for the created decks.
    </p><p className='instruction'>
If something isn't working as it should or you have an idea for improvement, drop me a line at <a href='mailto:david@krawaller.se'>david@krawaller.se</a>!
                </p>
                <p>
                    <p className='instruction'><strong>2015-04-10: </strong> Added all missing promos prior to the <a href="https://www.kickstarter.com/projects/388956994/lords-of-war-fantasy-battles">LoW Fantasy Battles Kickstarter</a>. Improved Aggregation display and added source breakdown.</p>
                    <p className='instruction'><strong>2015-04-09: </strong> Corrected wrong reach for templar longbowmen</p>
                </p>
	        </div>
        );
    }
});

module.exports = Home;