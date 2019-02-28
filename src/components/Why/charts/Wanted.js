import React, { Component } from 'react'
import {} from 'recharts'
import RadialBar from 'recharts/lib/polar/RadialBar';
import RadialBarChart from 'recharts/lib/chart/RadialBarChart';
import Legend from 'recharts/lib/component/Legend';
import Tooltip from 'recharts/lib/component/Tooltip';
import BarChart from 'recharts/lib/chart/BarChart';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import Bar from 'recharts/lib/cartesian/Bar';
import withStyles from '@material-ui/core/styles/withStyles';
import withTheme from '@material-ui/core/styles/withTheme';

const data = [
    {
        "name": "React",
        "Percent": 21.3
    },
    {
        "name": "Node.js",
        "Percent": 20.9
    },
    {
        "name": "TensorFlow",
        "Percent": 15.5
    },
    {
        "name": "Angular",
        "Percent": 14.3
    },
    {
        "name": ".NET Core",
        "Percent": 9.3
    },
    {
        "name": "Django",
        "Percent": 6.7
    },
    {
        "name": "Hadoop",
        "Percent": 6.4
    },
    {
        "name": "Xamarin",
        "Percent": 6.1
    },
]

class Wanted extends Component {
  render() {
      const { theme } = this.props;
    return (
<BarChart width={730} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="Percent" fill={theme.palette.secondary.main} />
</BarChart>
    )
  }
}

export default withTheme()(Wanted);
