export function launchesApi(http) {
  return {
    launches: () => {
      return http.get('/launches?limit=100');
    }
  };
}
