import React, { useState, useEffect } from 'react';

import { api } from '../api';
import { useServerData } from '../state/serverDataContext';
import Card from './Launch/Card';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Filters from './Launch/Filters';
import queryString from 'query-string';

const Home = ({ location, history }) => {
  const serverLaunches = useServerData(data => {
    return data.launches || [];
  });
  const [launches, setLaunches] = useState(serverLaunches);
  const [selectedYear, setSelectedYear] = useState('');
  const [isLaunchSuccessFilter, setIsLaunchSuccessFilter] = useState('');

  const onYearSearch = year => {
    setSelectedYear(year);
    let params = queryString.parse(location.search);
    let searchParams = { ...params, launch_year: year };

    history.push({
      search: queryString.stringify(searchParams)
    });
    api.launches
      .launches('?' + queryString.stringify(searchParams))
      .then(launches => {
        setLaunches(launches);
      });
  };
  const onSuccessLaunchSearch = isLaunchSuccessSearch => {
    setIsLaunchSuccessFilter(isLaunchSuccessSearch);
    let params = queryString.parse(location.search);
    let searchParams = { ...params, launch_success: isLaunchSuccessSearch };

    history.push({
      search: queryString.stringify(searchParams)
    });
    api.launches
      .launches('?' + queryString.stringify(searchParams))
      .then(launches => {
        setLaunches(launches);
      });
  };

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
    <Grid container>
      <Grid xs={12} md={2} item>
        <Filters
          onYearSearch={onYearSearch}
          selectedYear={selectedYear}
          onSuccessLaunchSearch={onSuccessLaunchSearch}
          isLaunchSuccessFilter={isLaunchSuccessFilter}
        />
      </Grid>
      <Grid xs={12} md={10} item>
        <Grid spacing={3} container>
          {launches.map(
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
                <Grid key={flight_number} xs={12} md={3} sm={6} item>
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
    </Grid>
  );
};

Home.fetchData = props => {
  return api.launches
    .launches(props._parsedUrl && props._parsedUrl.search)
    .then(launches => {
      return {
        launches
      };
    });
};

export default Home;
