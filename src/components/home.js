/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Interface = require('./interface');

var Home = React.createClass({
    render: function() {
        return (
        	<div>
                <p className='logo'><img src='./img/logo.png'/></p>
            	<p>
Welcome to the <a href='http://lords-of-war.com'>Lords of War</a> player aid tool! Here you can see <strong>statistics</strong> for all units or subsets of units, and/or <strong>create mercenary decks</strong> and see stats for the created decks.
    </p><p>
If something isnt working as it should or you have an idea for improvement, drop me a line at <a href='mailto:david@krawaller.se'>david@krawaller.se</a>!
                </p>
                <dl>
                    <dt>2015-04-11:</dt><dd>Added units newly revealed in the Kickstarter. Added Miscellaneous section with flowcharts.</dd>
                    <dt>2015-04-11:</dt><dd>Fixed faulty wyrm driver quantity. Added all (known) expansion and promo cards from the Kickstarter. Improved searchability on ranged attacks. Also added the elves+lizardmen return fire booster from the Kickstarter stretch goal, heres to hoping it funds! :)</dd>
                    <dt>2015-04-10:</dt><dd>Added all missing promos prior to the <a href="https://www.kickstarter.com/projects/388956994/lords-of-war-fantasy-battles">LoW Fantasy Battles Kickstarter</a>. Improved Aggregation display and added source breakdown.</dd>
                    <dt>2015-04-09:</dt><dd>Corrected wrong reach for templar longbowmen.</dd>
                </dl>
	        </div>
        );
    }
});

module.exports = Home;