import React, { useState, useEffect } from 'react';

import { api } from '../api';
import { useServerData } from '../state/serverDataContext';
import LaunchCard from './Launch/LaunchCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Filters from './Launch/Filters';
var parseQueryString = function(queryString) {
  var params = {},
    queries,
    temp,
    i,
    l;

  // Split into key/value pairs
  queries = queryString.split('&');

  // Convert the array of strings into an object
  for (i = 0, l = queries.length; i < l; i++) {
    temp = queries[i].split('=');
    params[temp[0]] = temp[1];
  }

  return params;
};
const Home = ({ location, history }) => {
  const serverLaunches = useServerData(data => {
    return data.launches || [];
  });
  const [launches, setLaunches] = useState(serverLaunches);
  const [selectedYear, setSelectedYear] = useState('');
  const [isLaunchSuccessFilter, setIsLaunchSuccessFilter] = useState('');

  const onYearSearch = year => {
    setSelectedYear(year);
    let params = location.search && location.search.substring(1);
    let searchParams = { launch_year: year };

    if (params) {
      let parsedParams = parseQueryString(params);
      searchParams = { ...parsedParams, launch_year: year };
    }
    var queryString = Object.keys(searchParams)
      .map(key => key + '=' + searchParams[key])
      .join('&');

    history.push({
      search: queryString
    });
    api.launches.launches('?' + queryString).then(launches => {
      setLaunches(launches);
    });
  };
  const onSuccessLaunchSearch = isLaunchSuccessSearch => {
    setIsLaunchSuccessFilter(isLaunchSuccessSearch);
    let params = location.search && location.search.substring(1);
    let searchParams = { launch_success: isLaunchSuccessSearch };
    if (params) {
      let parsedParams = parseQueryString(params);
      searchParams = { ...parsedParams, launch_success: isLaunchSuccessSearch };
    }
    var queryString = Object.keys(searchParams)
      .map(key => key + '=' + searchParams[key])
      .join('&');
    history.push({
      search: queryString
    });
    api.launches.launches('?' + queryString).then(launches => {
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
        <Grid className="space-launch-container" spacing={3} container>
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
                  <LaunchCard
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
