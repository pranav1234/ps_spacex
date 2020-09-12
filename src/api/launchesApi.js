export function launchesApi(http) {
  return {
    launches: searchParams => {
      if (searchParams) {
        return http.get(`/launches${searchParams}`);
      }
      return http.get(`/launches?limit=50`);
    }
  };
}
