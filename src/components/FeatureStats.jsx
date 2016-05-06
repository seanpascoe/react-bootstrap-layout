import React from 'react';

var FeatureStats = React.createClass({
  propTypes: {
    stat1: React.PropTypes.string,
    label1: React.PropTypes.string,
    stat2: React.PropTypes.string,
    label2: React.PropTypes.string,
    stat3: React.PropTypes.string,
    label3: React.PropTypes.string
  },

  render: function() {
    var fStatsStyle = {
      top: 200,
      background: "#272625",
      height: 100,
      color: "#dedcee",
      textAlign: "center",
      margin: 0,
      paddingLeft: 0,
      paddingRight: 0,
      boxShadow: "1px 1px 0.5px 1px rgba(0, 0, 0, 0.05)",
      borderBottomLeftRadius: 2,
      borderBottomRightRadius: 2
    };

    return (
      <div style={fStatsStyle} className="col-sm-12">
        <div >
          <div className="row">
            <div className="col-xs-4">
              <h3>{this.props.stat1}</h3>
              <p>{this.props.label1}</p>
            </div>
            <div className="col-xs-4">
              <h3>{this.props.stat2}</h3>
              <p>{this.props.label2}</p>
            </div>
            <div className="col-xs-4">
              <h3>{this.props.stat3}</h3>
              <p>{this.props.label3}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = FeatureStats;
