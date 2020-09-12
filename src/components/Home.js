import React, { useState } from 'react';

import { api } from '../api';
import { useServerData } from '../state/serverDataContext';
import Card from './Launch/Card';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const Home = () => {
  const serverLaunches = useServerData(data => {
    console.log('data: ', data);
    return data.launches || [];
  });
  const [text, setText] = useState('');
  const [todos, setTodos] = useState('');
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 140,
      width: 100
    },
    control: {
      padding: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid xs={3} item>
        <Card missionName={'Filters'} />
      </Grid>
      <Grid xs={9} spacing={3} container>
        {serverLaunches.map(
          ({
            mission_name,
            links: { mission_patch_small },
            flight_number,
            mission_id,
            launch_year,
            launch_success,
            launch_landing
          }) => {
            return (
              <Grid key={flight_number} xs={3} item>
                <Card
                  mission_patch_small={mission_patch_small}
                  mission_name={mission_name}
                  flight_number={flight_number}
                  mission_id={mission_id}
                  launch_year={launch_year}
                  launch_success={launch_success}
                  launch_landing={launch_landing}
                />
              </Grid>
            );
          }
        )}
      </Grid>
    </Grid>
  );
};

Home.fetchData = () => {
  return api.launches.launches().then(launches => {
    return {
      launches
    };
  });
};

export default Home;
