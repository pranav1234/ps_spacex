import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

import {
  Divider,
  Grid,
  GridListTile,
  GridList,
  ListSubheader
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop: '30'
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

export default function Filters() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Filters
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography color="textSecondary" component="div">
                Launch Year
              </Typography>
              <Divider />
            </Grid>
            {getYearArray().map(year => (
              <Grid item xs={6}>
                <Button variant="contained" color="primary">
                  <NavLink
                    to={`?launch_year=${year}`}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    {year}
                  </NavLink>
                </Button>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Typography color="textSecondary" component="div">
                Successful Launch
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="primary">
                True
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="primary">
                False
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
