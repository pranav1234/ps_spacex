import { httpClient } from './httpClient';
import { launchesApi } from './launchesApi';

export function apiFactory(http) {
  return {
    launches: launchesApi(http)
  };
}

const http = httpClient('https://api.spacexdata.com/v3');
export const api = apiFactory(http);
