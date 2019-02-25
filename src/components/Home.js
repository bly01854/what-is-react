import React, { Component } from 'react'
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import CardContent from '@material-ui/core';
import Card from '@material-ui/core/Card/Card';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import Typography from '@material-ui/core/Typography/Typography';

export default function Home(props) {
    const { classes } = props;
    return (
        <Card>
            <CardActionArea>
                <CardMedia 
                image="../static/react.png"
                title="React"/>
                <CardContent>
                    <Typography component="p">
                        What is React?
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
