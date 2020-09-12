import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

export default function LaunchCard({
  mission_patch_small,
  mission_name,
  flight_number,
  mission_id,
  launch_year,
  launch_success,
  launch_landing
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          style={{ height: 282 }}
          image={mission_patch_small}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom component="h6">
            {`${mission_name} #${flight_number}`}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Mission ids:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {mission_id && mission_id.join(' ')}
          </Typography>
          <div>
            <Typography
              display="inline"
              variant="body2"
              color="textPrimary"
              component="p"
            >
              Launch Year:
            </Typography>
            <Typography
              display="inline"
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ marginLeft: 4 }}
            >
              {launch_year}
            </Typography>
          </div>
          <div>
            <Typography
              display="inline"
              variant="body2"
              color="textPrimary"
              component="p"
            >
              Successfull Launch:
            </Typography>
            <Typography
              display="inline"
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ marginLeft: 4 }}
            >
              {launch_success ? 'yes' : 'no'}
            </Typography>
          </div>{' '}
          {/* <div>
            <Typography
              display="inline"
              variant="body2"
              color="textPrimary"
              component="p"
            >
              Successfull Landing:
            </Typography>
            <Typography
              display="inline"
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ marginLeft: 4 }}
            >
              {launch_landing}
            </Typography>
          </div> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
