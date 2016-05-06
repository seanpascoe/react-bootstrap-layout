import React from 'react';
var FeatureStats = require('./FeatureStats.jsx')

var FeatureBox = React.createClass({
  propTypes: {
    bColor: React.PropTypes.string,
    firstStat: React.PropTypes.string,
    secondStat: React.PropTypes.string,
    thirdStat: React.PropTypes.string
  },

  render: function() {
    var fBoxStyle = {
      background: this.props.bColor,
      height: 300,
      marginTop: 25,
      paddingLeft: 0,
      paddingRight: 0,
      boxShadow: "1px 1px 0.5px 1px rgba(0, 0, 0, 0.05)",
      borderRadius: 2
    };

    return (
      <div>
        <div style={fBoxStyle}>
          <FeatureStats stat1={this.props.firstStat} label1="Shot Views" stat2={this.props.secondStat} label2="Likes" stat3={this.props.thirdStat} label3="Comments"/>
        </div>
      </div>
    );
  }
});

module.exports = FeatureBox;
