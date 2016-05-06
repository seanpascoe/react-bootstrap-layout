var React = require('react');

var AnalyticsBox = React.createClass({
    propTypes: {
      statsHeader: React.PropTypes.string,
      subDesc: React.PropTypes.string,
      bgColor: React.PropTypes.string
    },
    render: function() {
      var boxWrapperStyle = {
        marginTop: 10
      };

      var statBoxStyle = {
        height: 150,
        background: "#fff",
        boxShadow: "1px 1px 0.5px 1px rgba(0, 0, 0, 0.05)",
        borderRadius: 2,
        marginTop: 20
      };

      var colorBox = {
        background: this.props.bgColor,
        height: 75,
        color: "white",
        boxShadow: "1px 1px 0.5px 1px rgba(0, 0, 0, 0.05)",
        borderRadius: 2,
        paddingLeft: 15,
        paddingRight: 5,
        paddingTop: 10
      }

      var statsHeaderStyle = {
        marginTop:-5
      }

      return (
        <div>
          <div style={statBoxStyle}>
            <div style={colorBox}>
              <p>{this.props.subDesc}</p>
              <h3 style={statsHeaderStyle}><strong>{this.props.statsHeader}</strong></h3>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = AnalyticsBox;
