var React = require('react');

var StatBox = React.createClass({
    propTypes: {
      statsHeader: React.PropTypes.string,
      subDesc: React.PropTypes.string
    },
    render: function() {
      var statBoxStyle = {
        height: 150,
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 5,
        paddingTop: 10,
        background: "#fff",
        boxShadow: "1px 1px 0.5px 1px rgba(0, 0, 0, 0.05)",
        borderRadius: 2
      };

      return (
        <div className="col-sm-3">
          <div style={statBoxStyle}>
            <h3><strong>{this.props.statsHeader}</strong></h3>
            <p>{this.props.subDesc}</p>
          </div>
        </div>
      );
    }
});

module.exports = StatBox;
