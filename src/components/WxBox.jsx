var React = require('react');

var WxBox = React.createClass({
    propTypes: {
      temp: React.PropTypes.string,
      location: React.PropTypes.string
    },
    render: function() {
      var wxBoxStyle = {
        height: 150,
        marginTop: 10,
        paddingTop: 10,
        color: "#fff",
        background: "#f9320c",
        boxShadow: "1px 1px 0.5px 1px rgba(0, 0, 0, 0.05)",
        borderRadius: 2,
        textAlign: "center"
      };
      var tempStyle = {
        fontSize: "3em"
      };
      return (
        <div className="col-sm-3">
          <div style={wxBoxStyle}>
            <h2 style={tempStyle}>{this.props.temp}</h2>
            <p>{this.props.location}</p>
          </div>
        </div>
      );
    }
});

module.exports = WxBox;
