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
        "name": "TensorFlow",
        "Percent": 73.5
    },
    {
        "name": "React",
        "Percent": 69.4
    },
    {
        "name": "Torch/PyTorch",
        "Percent": 68.0
    },
    {
        "name": "Node.js",
        "Percent": 66.4
    },
    {
        "name": ".NET Core",
        "Percent": 66.0
    },
    {
        "name": "Spark",
        "Percent": 66.0
    },
    {
        "name": "Spring",
        "Percent": 60.0
    },
    {
        "name": "Django",
        "Percent": 58.3
    },
]

class Loved extends Component {
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

export default withTheme()(Loved);
