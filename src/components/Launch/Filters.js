import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop: '30'
  },
  grid: {
    display: 'flex'
  }
});
const getYearArray = () => {
  let yearArray = [];
  let startYear = 2006;
  while (startYear <= new Date().getFullYear()) {
    yearArray.push(startYear);
    ++startYear;
  }
  return yearArray;
};

export default function Filters({
  selectedYear,
  onYearSearch,
  onSuccessLaunchSearch,
  isLaunchSuccessFilter
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Filters
          </Typography>
          <Typography color="textSecondary" component="div">
            Launch Year
          </Typography>
          <Divider />
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between'
            }}
          >
            {getYearArray().map(year => (
              <Button
                style={{ margin: 10 }}
                variant="contained"
                color="primary"
                disabled={selectedYear === year ? true : false}
                onClick={() => onYearSearch(year)}
              >
                {year}
              </Button>
            ))}
          </div>
          <Typography color="textSecondary" component="div">
            Successful Launch
          </Typography>
          <Divider />
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between'
            }}
          >
            <Button
              onClick={() => onSuccessLaunchSearch(true)}
              style={{ margin: 10 }}
              variant="contained"
              color="primary"
              disabled={isLaunchSuccessFilter === true}
            >
              True
            </Button>
            <Button
              onClick={() => onSuccessLaunchSearch(false)}
              style={{ margin: 10 }}
              variant="contained"
              color="primary"
              disabled={isLaunchSuccessFilter === false}
            >
              False
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
