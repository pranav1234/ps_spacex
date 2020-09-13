import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { Divider } from '@material-ui/core';

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
  return (
    <Paper elevation={3}>
      <Typography gutterBottom variant="h5" component="h2">
        Filters
      </Typography>
      <Typography color="textSecondary" component="div">
        Launch Year
      </Typography>
      <Divider />

      <Grid container>
        {getYearArray().map(year => (
          <Grid xs={6} sm={2} md={6} item>
            <Button
              style={{ margin: 10 }}
              variant="contained"
              color="primary"
              disabled={selectedYear === year ? true : false}
              onClick={() => onYearSearch(year)}
            >
              {year}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Typography color="textSecondary" component="div">
        Successful Launch
      </Typography>
      <Divider />
      <Grid container>
        <Grid xs={6} sm={2} md={6} item>
          <Button
            onClick={() => onSuccessLaunchSearch(true)}
            style={{ margin: 10 }}
            variant="contained"
            color="primary"
            disabled={isLaunchSuccessFilter === true}
          >
            True
          </Button>
        </Grid>
        <Grid xs={6} sm={2} md={6} item>
          <Button
            onClick={() => onSuccessLaunchSearch(false)}
            style={{ margin: 10 }}
            variant="contained"
            color="primary"
            disabled={isLaunchSuccessFilter === false}
          >
            False
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
