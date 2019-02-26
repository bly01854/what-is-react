import React from 'react'
import {
    CardContent,
    Paper,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography
  } from "@material-ui/core";
import {
    ExpandMore
} from "@material-ui/icons";

function SubExpansion(props){
    return(
        <div>
        <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography variant="subtitle1">{props.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Typography variant="subtitle2">
              {props.content}
            </Typography>
          </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
    )
}

export default SubExpansion;
