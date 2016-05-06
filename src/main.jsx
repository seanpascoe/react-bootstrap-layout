const React = require('react');
const ReactDOM = require('react-dom');
const StatBox = require('./components/StatBox.jsx');
const WxBox = require('./components/WxBox.jsx');
const FeatureBox = require('./components/FeatureBox.jsx');
const AnalyticsBox = require('./components/AnalyticsBox.jsx');

ReactDOM.render(<StatBox statsHeader="20" subDesc="New followers added this month"/>, document.getElementById('followers'));
ReactDOM.render(<StatBox statsHeader="$1250" subDesc="Average Monthly Income"/>, document.getElementById('income'));
ReactDOM.render(<StatBox statsHeader="$13865" subDesc="Yearly Income Goal"/>, document.getElementById('incomeGoal'));
ReactDOM.render(<WxBox temp="18&deg;" location="Paris"/>, document.getElementById('weather'));
ReactDOM.render(<FeatureBox bColor="#0080ff" firstStat="13,045" secondStat="7,654" thirdStat="3,511"/>, document.getElementById('first-feature'));
ReactDOM.render(<FeatureBox bColor="#d64072" firstStat="11,256" secondStat="3,455" thirdStat="1,357" />, document.getElementById('second-feature'));
ReactDOM.render(<AnalyticsBox statsHeader="1.5K" subDesc="New visitors" bgColor="#EFDC05" />, document.getElementById('visitors'));
ReactDOM.render(<AnalyticsBox statsHeader="50%" subDesc="Bounce Rate" bgColor="#00b9f1" />, document.getElementById('bounce-rate'));
ReactDOM.render(<AnalyticsBox statsHeader="28%" subDesc="Searches" bgColor="#7200da" />, document.getElementById('searches'));
ReactDOM.render(<AnalyticsBox statsHeader="140.5KB" subDesc="Traffic" bgColor="#75D701" />, document.getElementById('traffic'));
